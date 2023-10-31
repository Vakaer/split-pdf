import React, { useState } from 'react';

interface AppProps {}

const RadioButtons = () => {
  const [splitType, setSplitType] = useState<'range' | 'page'>('range');
  const [fromValue, setFromValue] = useState<number>(0);
  const [toValue, setToValue] = useState<number>(0);
  const [pageSplitType, setPageSplitType] = useState<'separate' | 'one'>('separate');

  const handleSplitTypeChange = (newSplitType: 'range' | 'page') => {
    setSplitType(newSplitType);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="range"
            checked={splitType === 'range'}
            onChange={() => handleSplitTypeChange('range')}
          />
          Split by Range
        </label>
        <label>
          <input
            type="radio"
            value="page"
            checked={splitType === 'page'}
            onChange={() => handleSplitTypeChange('page')}
          />
          Split by Page
        </label>
      </div>

      {splitType === 'range' && (
        <div>
          <input
            type="number"
            placeholder="From"
            value={fromValue}
            onChange={(e) => setFromValue(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="To"
            value={toValue}
            onChange={(e) => setToValue(Number(e.target.value))}
          />
        </div>
      )}

      {splitType === 'page' && (
        <div>
          <label>
            <input
              type="radio"
              value="separate"
              checked={pageSplitType === 'separate'}
              onChange={() => setPageSplitType('separate')}
            />
            Separate Files
          </label>
          <label>
            <input
              type="radio"
              value="one"
              checked={pageSplitType === 'one'}
              onChange={() => setPageSplitType('one')}
            />
            One File
          </label>
        </div>
      )}
    </div>
  );
};

export default RadioButtons;
