import { useRef, useState } from "react";

function ScriptDeploy() {

    const [path,setPath] = useState('');
    const [counterName,setCounterName] = useState('');
    const [rpcurl,setRpcurl] = useState('');
    const textAreaRef = useRef(null);

    const All = `forge script script/ ${path}:${counterName} --rpc-url ${rpcurl} --private-key  --broadcast'`

    function handleCopy() {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            alert('Copy');
        }
    }
    
    return (
        <div style={{ margin: '20px' }}>
            <input 
                type = "text"
                value = {path}
                onChange = {(e) => setPath(e.target.value)}
                placeholder = "输入合约路径 src/..."
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {counterName}
                onChange = {(e) => setCounterName(e.target.value)}
                placeholder = "输入合约名称"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {rpcurl}
                onChange = {(e) => setRpcurl(e.target.value)}
                placeholder = "输入RPC URL"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <textarea
                ref={textAreaRef}
                value={All}
                readOnly
                rows={4}
                cols={50}
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}                
            ></textarea>
            <button onClick={handleCopy} style={{ padding: '10px 20px' , fontSize: '16px'}}>
                Copy
            </button>
        </div>
    )

}

function VerifyContract() {

    const [path,setPath] = useState('');
    const [counterName,setCounterName] = useState('');
    const [chainId,setChainId] = useState('');
    const [args,setargs] = useState('');
    const [address,setAddress] = useState('');
    const textAreaRef = useRef(null);

    const All = `forge verity-contract --chain-id ${chainId} --watch --constructor-args $(cast abi-encode ${args}) --etherscan-api-key  ${address} ${path}:${counterName}`

    function handleCopy() {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            alert('Copy');
        }
    }
    
    return (
        <div style={{ margin: '20px' }}>
            <input 
                type = "text"
                value = {chainId}
                onChange = {(e) => setChainId(e.target.value)}
                placeholder = "输入Chain Id"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {args}
                onChange = {(e) => setargs(e.target.value)}
                placeholder = "输入constructor参数（constructor args）"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {address}
                onChange = {(e) => setAddress(e.target.value)}
                placeholder = "输入合约地址"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {path}
                onChange = {(e) => setPath(e.target.value)}
                placeholder = "输入合约路径 src/..."
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {counterName}
                onChange = {(e) => setCounterName(e.target.value)}
                placeholder = "输入合约名称"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <textarea
                ref={textAreaRef}
                value={All}
                readOnly
                rows={4}
                cols={50}
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}                
            ></textarea>
            <button onClick={handleCopy} style={{ padding: '10px 20px' , fontSize: '16px'}}>
                Copy
            </button>
        </div>
    )
}

function Send() {

    const [address,setAddress] = useState('');
    const [functionName,setFunctionName] = useState('');
    const [args,setargs] = useState('');
    const [rpcurl,setRpcurl] = useState('');
    const textAreaRef = useRef(null);

    const All = `cast send ${address}"${functionName}" ${args} --rpc-url ${rpcurl} --private-key  `

    function handleCopy() {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            alert('Copy');
        }
    }
    
    return (
        <div style={{ margin: '20px' }}>
            <input 
                type = "text"
                value = {address}
                onChange = {(e) => setAddress(e.target.value)}
                placeholder = "输入合约地址"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {functionName}
                onChange = {(e) => setFunctionName(e.target.value)}
                placeholder = "输入函数名称"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {args}
                onChange = {(e) => setargs(e.target.value)}
                placeholder = "输入参数"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {rpcurl}
                onChange = {(e) => setRpcurl(e.target.value)}
                placeholder = "输入RPC URL"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <textarea
                ref={textAreaRef}
                value={All}
                readOnly
                rows={4}
                cols={50}
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}                
            ></textarea>
            <button onClick={handleCopy} style={{ padding: '10px 20px' , fontSize: '16px'}}>
                Copy
            </button>
        </div>
    )
}

function Call() {
    
    const [address,setAddress] = useState('');
    const [functionName,setFunctionName] = useState('');
    const [args,setargs] = useState('');
    const [rpcurl,setRpcurl] = useState('');
    const textAreaRef = useRef(null);

    const All = `cast call ${address}" ${functionName} " ${args} --rpc-url ${rpcurl} --private-key`

    function handleCopy() {
        if (textAreaRef.current) {
            textAreaRef.current.select();
            document.execCommand('copy');
            alert('Copy');
        }
    }
    
    return (
        <div style={{ margin: '20px' }}>
            <input 
                type = "text"
                value = {address}
                onChange = {(e) => setAddress(e.target.value)}
                placeholder = "输入合约地址"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {functionName}
                onChange = {(e) => setFunctionName(e.target.value)}
                placeholder = "输入函数名称"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {args}
                onChange = {(e) => setargs(e.target.value)}
                placeholder = "输入参数"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <input 
                type = "text"
                value = {rpcurl}
                onChange = {(e) => setRpcurl(e.target.value)}
                placeholder = "输入RPC URL"
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}
            />
            <br />
            <textarea
                ref={textAreaRef}
                value={All}
                readOnly
                rows={4}
                cols={50}
                style={{ marginBottom: '10px' , padding: '10px' , fontSize: '16px'}}                
            ></textarea>
            <button onClick={handleCopy} style={{ padding: '10px 20px' , fontSize: '16px'}}>
                Copy
            </button>
        </div>
    )
}

export {ScriptDeploy,VerifyContract,Send,Call};