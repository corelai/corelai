import React, {useContext} from 'react';
import SettingsContext from '../../context/SettingsContext';

const EnvironmentDisplay: React.FC = () => {
    const ctx = useContext(SettingsContext);
    const envName = ctx?.envName ?? '';

    const className =
        'text-writing-400 w-5 h-full ' +
        'fixed z-1 [writing-mode:vertical-lr] ' +
        'text-center uppercase text-sm font-[600]';
    return (<>
        {envName ==='dev' && <div className={`bg-purple-400/50 ${className}`}>{envName}</div>}
        {envName ==='local' && <div className={`bg-green-400/50 ${className}`}>{envName}</div>}
        {envName ==='uat' && <div className={`bg-orange-400/50 ${className}`}>{envName}</div>}
    </>)
}

export default EnvironmentDisplay;