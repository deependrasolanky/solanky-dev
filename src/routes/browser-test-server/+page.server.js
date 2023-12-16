export async function load({ request }) {
    const headers = request.headers;
    console.log('Headers:', headers);
    const userAgent = headers.get('user-agent');
    const brands = headers.get('sec-ch-ua')
    const mobile = headers.get('sec-ch-ua-mobile')
    const platform = headers.get('sec-ch-ua-platform')
    const model = headers.get('sec-ch-ua-model')

       return {
        headers:
        {
            userAgent: userAgent,
            brands: brands,
            mobile:mobile,
            platform:platform,
            model:model
        }
    };
}