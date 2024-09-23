/** @type {import('next').NextConfig} */

// next.jsでstyled-componentsを使用する際のコンパイラ設定など追記
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr:true
        },
    },
}

export default nextConfig;
