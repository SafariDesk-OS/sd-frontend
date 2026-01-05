import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Shield, 
  Calendar, 
  Plus, 
  CheckCircle, 
  Edit, 
  Save,
  X
} from 'lucide-react';
import Drawer from '../../components/ui/Drawer';
import BusinessHoursForm from './mini/BusinessHoursForm';
import PolicyComponent from './mini/PoliciesComponent';
import BusinessHoursComponent from './mini/BusinessHoursComponent';
import PolicyForm from './mini/PolicyForm';
import HolidayForm from './mini/HolidayForm';
import HolidayComponent from './mini/HolidayComponent';

export const SlaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('policies');
  const [showDrawer, setShowDrawer] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const [modalType, setModalType] = useState('');
    const [businessHoursCount, setBusinessHoursCount] = useState(0); // State to hold the count of business days

  // Mock data for demonstration
  const [policiesCount, setPoliciesCount] = useState(0); // State to hold the count of policies

  const openModal = (type: string) => {
    setModalType(type);
    setShowDrawer(true);
  };

  const TabButton = ({ id, label, icon: Icon, active }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        active
          ? 'bg-green-600 text-white shadow-md'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );


 
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="">
        {/* Header */}
        <div className="mb-8">

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Policies</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{policiesCount}</p>
                </div>
                <Shield className="text-blue-600" size={32} />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Business Days</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{businessHoursCount}</p>
                </div>
                <Clock className="text-green-600" size={32} />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Holidays</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                </div>
                <Calendar className="text-orange-600" size={32} />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">SLA Compliance</p>
                  <p className="text-2xl font-bold text-green-600">94%</p>
                </div>
                <CheckCircle className="text-green-600" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <TabButton
            id="policies"
            label="SLA Policies"
            icon={Shield}
            active={activeTab === 'policies'}
          />
          <TabButton
            id="business-hours"
            label="Business Hours"
            icon={Clock}
            active={activeTab === 'business-hours'}
          />
          <TabButton
            id="holidays"
            label="Holidays"
            icon={Calendar}
            active={activeTab === 'holidays'}
          />
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          {/* Tab Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {activeTab === 'policies' && 'SLA Policies'}
                {activeTab === 'business-hours' && 'Business Hours'}
                {activeTab === 'holidays' && 'Holidays'}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {activeTab === 'policies' && 'Define response and resolution timeframes for different priorities'}
                {activeTab === 'business-hours' && 'Configure working hours for SLA calculations'}
                {activeTab === 'holidays' && 'Manage holidays that affect SLA timings'}
              </p>
            </div>
            {
              activeTab !== 'holidays' && (
                <button
                  onClick={() => openModal(activeTab)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                >
                  <Plus size={16} />
                  Add {activeTab === 'policies' ? 'Policy' : activeTab === 'business-hours' ? 'Schedule' : 'Holiday'}
                </button>
              )
            }
            
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'policies' && (
              <PolicyComponent reload={reloadTrigger} setPoliciesCount={setPoliciesCount} />
            )}

            {activeTab === 'business-hours' && (
              <BusinessHoursComponent onEdit={() => {}} reload={reloadTrigger} setBusinessHoursCount={setBusinessHoursCount}/>
            )}
             {activeTab === 'holidays' && (
              <HolidayComponent reload={reloadTrigger} />
            )}
            
            </div>



          </div>

         
          </div>


          {/* Drawer */}
          <Drawer 
            close={() => setShowDrawer(false)} 
            isOpen={showDrawer} 
            content={
              activeTab === 'policies' ? (
                <PolicyForm onSucess={() => setReloadTrigger(prev => prev + 1)} />
              ) : activeTab === 'business-hours' ? (
                <BusinessHoursForm onSucess={() => setReloadTrigger(prev => prev + 1)} />
              ) : (
                <HolidayForm  onSucess={() => setReloadTrigger(prev => prev + 1)}/>
              )
            }
            showTitle={true} 
            title={
              activeTab === 'policies'
                ? 'Add SLA Policy'
                : activeTab === 'business-hours'
                ? 'Add Business Hours'
                : 'Add Holiday'
            }
            size="md"
          />




          </div>
          )}
