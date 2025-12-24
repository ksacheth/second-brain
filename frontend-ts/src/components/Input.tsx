interface inputProps {
    referance: any;
    placeholder: string;
}

export default function Input({referance , placeholder} : inputProps) {
    return <div>
        <input ref={referance} placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" ></input>
    </div>
}