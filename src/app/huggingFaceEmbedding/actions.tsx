'use server'

export async function createHuggingFaceEmbedding(txt: string) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://esresearch.azurewebsites.net';
    const body = {
      txt,
    };
  
    console.log("call fetch", body);

    const result = await fetch(`${apiUrl}/api/huggingFaceEmbedding`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // <--- Ensure JSON is properly parsed
        },
        body: JSON.stringify(body),
    });

    // const data = await result.json();
    // if(data[0] != 'success') {
    //   return false;
    // }

    return true;
}
