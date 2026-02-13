
import React, { useState, useEffect } from 'react';
import { OnPremiseDelivery } from './OnPremiseDelivery';
import { ODC } from './ODC';
import { ManagedServices } from './ManagedServices';

interface SoftwareDeliveryProps {
  onInitiateStrategy: () => void;
  onNavigateTo?: (page: any) => void;
}

export const SoftwareDelivery: React.FC<SoftwareDeliveryProps> = ({ onInitiateStrategy, onNavigateTo }) => {
  const [activeTab, setActiveTab] = useState<'on-premise' | 'odc' | 'managed-services'>('on-premise');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="bg-[#1A1A1A] min-h-screen pt-24">
      {/* Header / Tab Navigation */}
      <div className="bg-[#1A1A1A] border-b border-white/10 sticky top-[72px] z-40 pt-8 pb-0 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
                <div className="h-1 w-12 bg-[#70e000] mb-4"></div>
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Software Delivery</h1>
            </div>
            <div className="flex gap-8 overflow-x-auto scrollbar-hide">
                <button
                    onClick={() => setActiveTab('on-premise')}
                    className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap ${activeTab === 'on-premise' ? 'text-[#70e000] border-[#70e000]' : 'text-gray-500 border-transparent hover:text-white'}`}
                >
                    On-Premise
                </button>
                <button
                    onClick={() => setActiveTab('odc')}
                    className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap ${activeTab === 'odc' ? 'text-[#70e000] border-[#70e000]' : 'text-gray-500 border-transparent hover:text-white'}`}
                >
                    ODC
                </button>
                <button
                    onClick={() => setActiveTab('managed-services')}
                    className={`pb-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 whitespace-nowrap ${activeTab === 'managed-services' ? 'text-[#70e000] border-[#70e000]' : 'text-gray-500 border-transparent hover:text-white'}`}
                >
                    Managed Services
                </button>
            </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white">
        {activeTab === 'on-premise' && (
            <OnPremiseDelivery 
                onInitiateStrategy={onInitiateStrategy} 
                showBackToSolutions={false}
                onBackToSolutions={() => {}} 
            />
        )}
        {activeTab === 'odc' && (
            <ODC 
                onInitiateStrategy={onInitiateStrategy} 
                showBackToSolutions={false}
                onBackToSolutions={() => {}}
            />
        )}
        {activeTab === 'managed-services' && (
            <ManagedServices 
                onInitiateStrategy={onInitiateStrategy} 
                showBackToSolutions={false}
                onBackToSolutions={() => {}}
            />
        )}
      </div>
    </div>
  );
};
