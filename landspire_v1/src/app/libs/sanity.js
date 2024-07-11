import {
    createClient
} from "@sanity/client"

const client = createClient({
    name: 'default',
    title: 'Landspire',
    projectId: 'uqsv68h3',
    dataset: 'certificate',
    useCdn: true,
    apiVersion: '2024-07-11',
});

export async function testSanity() {
    const data = await client.fetch(`count(*)`);
    console.log(`Number of data ${data}`); // set to `false` to by
    
}

export default client