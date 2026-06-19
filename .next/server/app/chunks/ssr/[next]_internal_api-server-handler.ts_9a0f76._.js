(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[next]_internal_api-server-handler.ts_9a0f76._.js", {

"[next]/internal/headers.ts (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "headersFromEntries": ()=>headersFromEntries,
    "toPairs": ()=>toPairs
});
function headersFromEntries(entries) {
    const headers = Object.create(null);
    for (const [key, value] of entries){
        if (key in headers) {
            const prevValue = headers[key];
            if (typeof prevValue === 'string') {
                headers[key] = [
                    prevValue,
                    value
                ];
            } else {
                prevValue.push(value);
            }
        } else {
            headers[key] = value;
        }
    }
    return headers;
}
function toPairs(arr) {
    if (arr.length % 2 !== 0) {
        throw new Error('toPairs: expected an even number of elements');
    }
    const pairs = [];
    for(let i = 0; i < arr.length; i += 2){
        pairs.push([
            arr[i],
            arr[i + 1]
        ]);
    }
    return pairs;
}

})()),
"[next]/internal/server.ts (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "createServer": ()=>createServer,
    "makeRequest": ()=>makeRequest
});
var __TURBOPACK__external__node$3a$http__ = __turbopack_external_require__("node:http", true);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/headers.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function createServer() {
    return new Promise((resolve)=>{
        const server = __TURBOPACK__external__node$3a$http__["default"].createServer();
        server.listen(0, ()=>{
            resolve(server);
        });
    });
}
function makeRequest(server, method, path, rawQuery, rawHeaders) {
    return new Promise((resolve, reject)=>{
        let clientRequest = null;
        let clientResponseResolve;
        let clientResponseReject;
        const clientResponsePromise = new Promise((resolve, reject)=>{
            clientResponseResolve = resolve;
            clientResponseReject = reject;
        });
        let serverRequest = null;
        let serverResponse = null;
        const maybeResolve = ()=>{
            if (clientRequest != null && serverRequest != null && serverResponse != null) {
                cleanup();
                resolve({
                    clientRequest,
                    clientResponsePromise,
                    serverRequest,
                    serverResponse
                });
            }
        };
        const cleanup = ()=>{
            server.removeListener('error', errorListener);
            server.removeListener('request', requestListener);
        };
        const errorListener = (err)=>{
            cleanup();
            reject(err);
        };
        const requestListener = (req, res)=>{
            serverRequest = req;
            serverResponse = res;
            maybeResolve();
        };
        const cleanupClientResponse = ()=>{
            if (clientRequest != null) {
                clientRequest.removeListener('response', responseListener);
                clientRequest.removeListener('error', clientResponseErrorListener);
            }
        };
        const clientResponseErrorListener = (err)=>{
            cleanupClientResponse();
            clientResponseReject(err);
        };
        const responseListener = (res)=>{
            cleanupClientResponse();
            clientResponseResolve(res);
        };
        server.once('request', requestListener);
        server.once('error', errorListener);
        const address = server.address();
        clientRequest = __TURBOPACK__external__node$3a$http__["default"].request({
            host: 'localhost',
            port: address.port,
            method,
            path: rawQuery != null && rawQuery.length > 0 ? `${path}?${rawQuery}` : path,
            headers: rawHeaders != null ? __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["headersFromEntries"](rawHeaders) : undefined
        });
        clientRequest.flushHeaders();
        clientRequest.once('response', responseListener);
        clientRequest.once('error', clientResponseErrorListener);
    });
}

})()),
"[next]/internal/api-server-handler.ts (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>startHandler
});
var __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[turbopack-node]/ipc/index.ts (ecmascript, ssr)");
var __TURBOPACK__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/server.ts (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/headers.ts (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ipc = __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$ipc$2f$index$2e$ts__$28$ecmascript$29$__["IPC"];
function startHandler(handler) {
    (async ()=>{
        while(true){
            let operationPromise = null;
            const msg = await ipc.recv();
            switch(msg.type){
                case 'headers':
                    {
                        operationPromise = createOperation(msg.data);
                        break;
                    }
                default:
                    {
                        console.error('unexpected message type', msg.type);
                        process.exit(1);
                    }
            }
            let body = __TURBOPACK__external__node$3a$buffer__["Buffer"].alloc(0);
            let operation;
            loop: while(true){
                const msg = await ipc.recv();
                switch(msg.type){
                    case 'bodyChunk':
                        {
                            body = __TURBOPACK__external__node$3a$buffer__["Buffer"].concat([
                                body,
                                __TURBOPACK__external__node$3a$buffer__["Buffer"].from(msg.data)
                            ]);
                            break;
                        }
                    case 'bodyEnd':
                        {
                            operation = await operationPromise;
                            break loop;
                        }
                    default:
                        {
                            console.error('unexpected message type', msg.type);
                            process.exit(1);
                        }
                }
            }
            await Promise.all([
                endOperation(operation, body),
                operation.clientResponsePromise.then((clientResponse)=>handleClientResponse(operation.server, clientResponse))
            ]);
        }
    })().catch((err)=>{
        ipc.sendError(err);
    });
    async function createOperation(renderData) {
        const server = await __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__["createServer"]();
        const { clientRequest , clientResponsePromise , serverRequest , serverResponse  } = await __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$server$2e$ts__$28$ecmascript$29$__["makeRequest"](server, renderData.method, renderData.path, renderData.rawQuery, renderData.rawHeaders);
        return {
            clientRequest,
            server,
            clientResponsePromise,
            apiOperation: handler({
                request: serverRequest,
                response: serverResponse,
                query: renderData.rawQuery,
                params: renderData.params,
                path: renderData.path
            })
        };
    }
    function handleClientResponse(server, clientResponse) {
        const responseHeaders = {
            status: clientResponse.statusCode,
            headers: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["toPairs"](clientResponse.rawHeaders)
        };
        ipc.send({
            type: 'headers',
            data: responseHeaders
        });
        clientResponse.on('data', (chunk)=>{
            ipc.send({
                type: 'bodyChunk',
                data: chunk.toJSON().data
            });
        });
        clientResponse.once('end', ()=>{
            ipc.send({
                type: 'bodyEnd'
            });
            server.close();
        });
        clientResponse.once('error', (err)=>{
            ipc.sendError(err);
        });
    }
    async function endOperation(operation, body) {
        operation.clientRequest.end(body);
        try {
            await operation.apiOperation;
        } catch (error) {
            if (error instanceof Error) {
                await ipc.sendError(error);
            } else {
                await ipc.sendError(new Error('an unknown error occurred'));
            }
            return;
        }
    }
}

})()),
}]);

//# sourceMappingURL=[next]_internal_api-server-handler.ts_9a0f76._.js.map