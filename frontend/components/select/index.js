import styles from './select.module.css'


export const Select = ({label, options, onChange}) => {

    return (
        <div>
            <label htmlFor={`${label}-select`}>{label}</label>
            <select className={styles.selectContainer} onChange={onChange} name={`${label}-select`} id={`${label}-select`}>

                {options.map(({id, name}) => {
                    return <option key={id} value={id}>{name}</option>
                })}
                
            </select>
        </div>
    )
};
