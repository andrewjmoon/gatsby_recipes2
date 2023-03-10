exports.handler = async (event, context) => {
    const {user} = context.clientContext
    if(user){
        const userID = user.sub
        return {
            statusCode: 200,
            body: JSON.stringify({
                'X-Hasura-User-Id': userID,
                'X-Hasura-Role': `${user.app_metadata.role[0]}`
            })
        }
    }
return {
    statusCode: 200,
    body: JSON.stringify({
        'X-Hasura-Role': 'anonymous'
        })
    }
}