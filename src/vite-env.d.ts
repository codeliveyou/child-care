/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
}

interface ImportMetaEnv {
    readonly env: ImportMetaEnv;
}