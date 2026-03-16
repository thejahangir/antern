const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;

  // 1. Process font size and text-transform for <h1, <h2, <h3
  content = content.replace(/(<(?:h1|h2|h3)[^>]*className=")([^"]+)(")/g, (match, p1, p2, p3) => {
    let classes = p2.split(/\s+/);
    
    classes = classes.filter(c => 
      !c.match(/^(?:sm:|md:|lg:|xl:|2xl:)?text-\d*xl$/) && 
      !c.match(/^(?:test|ext|md:ext|lg:ext|text|xl|sm|lg)-\d*xl$/i) && 
      !c.match(/^(?:uppercase|lowercase|capitalize)$/) 
    );
    
    classes.push('text-4xl', 'md:text-5xl', 'capitalize');
    classes = [...new Set(classes)];
    
    return p1 + classes.join(' ').trim() + p3;
  });

  // 2. Process gradients
  content = content.replace(/(<(h1|h2|h3)[^>]*>)([\s\S]*?)(<\/\2>)/gi, (match, openTag, tag, innerHtml, closeTag) => {
    const oldSpanGradientRegex = /className="([^"]*\bbg-gradient-to-r\b[^"]*)\b(?:from-\[([^\]]+)\]|from-([a-z]+))\s+(?:to-\[([^\]]+)\]|to-([a-z]+))([^"]*)"/gi;

    let newInner = innerHtml.replace(oldSpanGradientRegex, (m, prepend, fromHex, fromName, toHex, toName, append) => {
        let isDarkBg = false;
        const color = (fromHex || fromName || '').toLowerCase();
        
        // Dark check
        if (color === '#fff' || color === '#ffffff' || color === 'white' || openTag.includes('text-white') || openTag.includes('text-gray-100')) {
            isDarkBg = true;
        }

        if (isDarkBg) {
            return `className="${prepend}from-[#fff] to-[#0085F7]${append}"`;
        } else {
            return `className="${prepend}from-[#0085F7] to-[#00A94B]${append}"`;
        }
    });

    return openTag + newInner + closeTag;
  });

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Done. Modified ${modifiedCount} files.`);
