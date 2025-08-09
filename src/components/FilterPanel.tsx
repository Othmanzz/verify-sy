import React from 'react';
import { Filter, X, Search } from 'lucide-react';
import { FilterOptions } from '../types';
import { categories, verdictOptions, dateRanges, sortOptions } from '../data/mockData';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  searchQuery,
  onSearchChange
}) => {
  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearAllFilters = () => {
    onFilterChange({
      category: 'جميع الفئات',
      verdict: 'جميع التصنيفات',
      dateRange: 'جميع التواريخ',
      sortBy: 'الأحدث'
    });
    onSearchChange('');
  };

  const hasActiveFilters = 
    filters.category !== 'جميع الفئات' ||
    filters.verdict !== 'جميع التصنيفات' ||
    filters.dateRange !== 'جميع التواريخ' ||
    searchQuery.length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4" dir="rtl">
      <div className="bg-white rounded-2xl max-w-2xl w-full mt-20 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Filter className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">تصفية النتائج</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              البحث في المحتوى
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="ابحث في العناوين والمحتوى..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              الفئة
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange('category', category)}
                  className={`p-3 text-sm rounded-lg border transition-colors text-right ${
                    filters.category === category
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Verdict Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              نتيجة التحقق
            </label>
            <div className="grid grid-cols-2 gap-2">
              {verdictOptions.map((verdict) => (
                <button
                  key={verdict}
                  onClick={() => handleFilterChange('verdict', verdict)}
                  className={`p-3 text-sm rounded-lg border transition-colors text-right ${
                    filters.verdict === verdict
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {verdict}
                </button>
              ))}
            </div>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              الفترة الزمنية
            </label>
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dateRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              ترتيب النتائج
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-blue-900">المرشحات النشطة</h4>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  مسح الكل
                </button>
              </div>
              <div className="space-y-1 text-sm text-blue-800">
                {filters.category !== 'جميع الفئات' && (
                  <div>الفئة: {filters.category}</div>
                )}
                {filters.verdict !== 'جميع التصنيفات' && (
                  <div>التصنيف: {filters.verdict}</div>
                )}
                {filters.dateRange !== 'جميع التواريخ' && (
                  <div>الفترة: {filters.dateRange}</div>
                )}
                {searchQuery && (
                  <div>البحث: "{searchQuery}"</div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={clearAllFilters}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              مسح المرشحات
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              تطبيق المرشحات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;