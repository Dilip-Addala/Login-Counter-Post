

const Input=(props)=>{
    const {type,placeholder, className,onChange,value,name,pattern} = props;
    return <input type={type} placeholder={placeholder} htmlFor={name} value={value} onChange={onChange} className={className} name={name} pattern={pattern} required/> 
}

export default Input