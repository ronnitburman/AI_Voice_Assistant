import Vapi from "@vapi-ai/web"
export const vapi = new Vapi(import.meta.env.VITE_VAPI_API_KEY)
const assistandId = import.meta.env.VITE_ASSISTANT_ID

export const startAssistant = async (firstName, LastName, email, phone) => {
    const assistandOverrides = {
        variableValues: {
            firstName,
            LastName,
            email,
            phone
        }
    }
    return await vapi.start(assistandId, assistandOverrides)
};

export const stopAssistant = () => {
    vapi.stop
}

