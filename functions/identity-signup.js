const fetch = require('node-fetch')

exports.handler = async (event) => {
    const {user} = JSON.parse(event.body)

    try {
        const data = await fetch(process.env.HASURA_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET}`
            },
            body: JSON.stringify({
                query: `
                mutation UserMutation($email:String, $user_id: String){
                insert_user(objects: {email: $email, user_id: $user_id}) {
                affected_rows
                    }
                  }
                `,
                variables:{
                    user_id: user.id,
                    email: user.email,
                }
            })
        }).then((res)=> res.json())
    }   catch(e) {
        console.error(JSON.stringify(e), null, 2)
        return {
            statusCode: 500
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            app_metadata: {
                role: ['free'],
            },
        }),
    }
}