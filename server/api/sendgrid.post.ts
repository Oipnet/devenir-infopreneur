export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)
    const message = ({...body, from: {email: config.senderEmail}})

    return await $fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.sendApiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(message),
    }).catch((error) => {
        return error
    });
})