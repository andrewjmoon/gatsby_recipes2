const {HASURA_ADMIN_SECRET, GATSBY_HASURA_URL } = process.env
const fetch = require('node-fetch')

exports.handler = async (event) => {
    const {user} = JSON.parse(event.body)

    try {
        const data = await fetch(GATSBY_HASURA_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": `${HASURA_ADMIN_SECRET}`,
            },
            body: JSON.stringify({
                query: `
                mutation UserMutation($email:String, $id: String, $name: String){
                insert_user(objects: {email: $email, id: $id, name: $name}) {
                affected_rows
                    }
                  }
                `,
                variables:{
                    id: user.id,
                    email: user.email,
                    name: user.user_metadata.full_name,
                }
            })
        }).then((res)=> res.json())
    }   catch(e) {
        console.error(JSON.stringify(e), null, 2)
        return {
            statusCode: 500,
            body: "Something is wrong",
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