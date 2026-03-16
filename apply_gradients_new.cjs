const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  content = content.replace(/(<(h1|h2|h3)[^>]*>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tag, innerHtml, closeTag) => {
    
    // Skip if it contains an existing gradient
    if (innerHtml.includes('bg-gradient') || innerHtml.includes('text-transparent')) {
      return match;
    }

    // Skip if it doesn't have a large text size (to avoid styling card titles aggressively)
    if (!openTag.includes('text-3xl') && !openTag.includes('text-4xl') && !openTag.includes('text-5xl') && !openTag.includes('text-6xl')) {
        return match;
    }

    // Determine background 
    let isDarkBg = false;
    if (openTag.includes('text-white') || openTag.includes('text-gray-100') || openTag.includes('text-[#fff]')) {
        isDarkBg = true;
    }

    const gradientClasses = "text-transparent bg-clip-text bg-gradient-to-r " + (isDarkBg 
        ? "from-[#fff] to-[#0085F7]"
        : "from-[#0085F7] to-[#00A94B]");

    // We only process if innerHtml has NO curly braces to avoid breaking JSX variables
    if (innerHtml.includes('{') || innerHtml.includes('}')) {
        return match; 
    }

    // Find the last word and wrap it
    let resultInner = innerHtml.replace(/(.*?\b)([\w'’-]+)([\s.,!?:]*)((?:<[^>]+>\s*)*)$/i, (m, prefix, word, punct, trailingTags) => {
        return `${prefix}<span className="${gradientClasses}">${word}</span>${punct}${trailingTags}`;
    });

    if (resultInner === innerHtml) {
        return match;
    }

    return openTag + resultInner + closeTag;
  });

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Done. Modified ${modifiedCount} files.`);
