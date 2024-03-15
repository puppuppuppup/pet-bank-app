import React, { useState, useId, useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import { DateRange, DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import styles from './Filters.module.scss';
import './DayPicker.scss';

interface Option {
    value: string;
    label: string;
}

const sortOptions: Option[] = [
    {
        value: 'asc',
        label: 'Asc',
    },
    {
        value: 'desc',
        label: 'Desc',
    },
];
const cardOptions: Option[] = [
    {
        value: 'all',
        label: 'All',
    },
    {
        value: 'debit',
        label: 'Debit',
    },
    {
        value: 'credit',
        label: 'Credit',
    },
];

const Filters = () => {
    const [selectedSortOption, setSelectedSortOption] = useState<Option | null>(sortOptions[1]);
    const [selectedCardOption, setSelectedCardOption] = useState<Option | null>(cardOptions[0]);
    const [selectedDate, setSelectedDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    });
    const [isDayPickerOpened, setIsDayPickerOpened] = useState(false);

    const handleSortChange = (selectedOption: SingleValue<Option>): void => {
        setSelectedSortOption(selectedOption);
    };

    const handleCardChange = (selectedOption: SingleValue<Option>): void => {
        setSelectedCardOption(selectedOption);
    };

    return (
        <div className={styles.filters}>
            <Select
                defaultValue={selectedSortOption}
                options={sortOptions}
                onChange={handleSortChange}
                className={`${styles.filter_select} input`}
                instanceId={useId()}
                placeholder={'Select Sort Type...'}
            />
            <Select
                defaultValue={selectedCardOption}
                options={cardOptions}
                onChange={handleCardChange}
                className={`${styles.filter_select} input`}
                instanceId={useId()}
                placeholder={'Select Card Type...'}
            />
            <div className={styles.date_picker_wrapper}>
                <input
                    value={`${
                        selectedDate && selectedDate.from
                            ? format(selectedDate.from, 'PP') + ' - '
                            : ''
                    }${selectedDate && selectedDate.to ? format(selectedDate.to, 'PP') : ''}`}
                    onChange={() => {}}
                    className={`${styles.filter_select} input`}
                    placeholder={'Select Date...'}
                    onClick={() => setIsDayPickerOpened(prev => !prev)}
                />
                <DayPicker
                    mode='range'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className={`${styles.day_picker} ${isDayPickerOpened ? styles.opened : ''}`}
                />
            </div>
        </div>
    );
};

export default Filters;
