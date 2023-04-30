import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { AutoComplete } from 'primereact/autocomplete';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { Chip } from 'primereact/chip';
import { PaymentService } from '@/layout/service/PaymentService';
import EditButton from './components/infoComponents';

export function MultiplePaymentOpt({ isEditMode }) {
    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState([]);
    const [filteredPayments, setFilteredPayments] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredPayOptions;

            if (!event.query.trim().length) {
                _filteredPayOptions = [...payments];
            }
            else {
                _filteredPayOptions = payments.filter((payment) => {
                    return payment.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredPayments(_filteredPayOptions);
        }, 250);
    }

    useEffect(() => {
        PaymentService.getPaymentMethods().then((data) => setPayments(data));
        console.log(payments)
    }, []);

    return (
        <>

            {isEditMode ?
                <AutoComplete field="name" multiple dropdown virtualScrollerOptions={{ itemSize: 38 }} value={selectedPayment} suggestions={filteredPayments} completeMethod={search} onChange={(e) => setSelectedPayment(e.value)} />
                : <div className="p-mt-2">
                    {selectedPayment.map((payment, index) => (
                        <Chip key={index} label={payment.name} className="mr-1 mb-1" />
                    ))}
                </div>
            }
        </>
    )
}

export function FrequencyOfPayDropdown({ isEditMode }) {
    const [options, setOptions] = useState([{ name: 'Weekly' }, { name: 'Bi-Weekly' }, { name: 'Semi-Monthly' }, { name: 'Monthly' }])
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        PaymentService.getFrequencyOfPayments().then((data) => setOptions(data));
    }, []);

    return (
        <>
            {isEditMode ?
                <div className="p-field">
                    <Dropdown id="frequencyOfPay" value={selectedOption} options={options.map(option => ({ label: option.name, value: option.name }))} onChange={(e) => setSelectedOption(e.value)} placeholder="Select Frequency of Pay" />
                </div>
                : <div className="col text-900">{selectedOption}</div>
            }
        </>
    );
}


const PaymentInformation = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [rateOfPay, setRateOfPay] = useState('');
    const [paymentFrequencies, setPaymentFrequencies] = useState('');
    const [selectedPaymentFrequency, setSelectedPaymentFrequency] = useState(null);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const renderPrefferedPaymentField = () => {
        return (
            <div className="p-field">
                <MultiplePaymentOpt isEditMode={isEditMode} />
            </div>
        );
    };

    const renderRateOfPayField = () => {
        return (
            <div className="p-field">
                <FrequencyOfPayDropdown isEditMode={isEditMode} />
            </div>
        );
    };


    const renderContent = () => {
        return (
            <>
                <div className="p-mb-2 grid">
                    <div className="col-fixed text-500 w-4 md:w-2 font-medium mr-4">Preferred Payment:</div>
                    {renderPrefferedPaymentField()}
                </div>
                <div className='divider my-3'></div>
                <div className="p-mb-2 grid">
                    <div className="col-fixed text-500 w-4 md:w-2 font-medium mr-4">Frequency of pay:</div>
                    {renderRateOfPayField()}
                </div>
            </>
        );
    };

    return (
        <div className="p-d-flex p-jc-between">
            <Panel header="Payment Information" className="p-col-12 p-sm-6 p-md-4">
                <div className='flex flex-row justify-content-between'>
                    <div className="p-mb-2 col">
                        {renderContent()}
                    </div>
                    <div className='flex-none'>
                        <EditButton isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
                    </div>
                </div>
            </Panel>
        </div>

    );

};

export default PaymentInformation;