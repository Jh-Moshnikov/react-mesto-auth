export async function register(email, password) {
    const data = await fetch('https://auth.nomoreparties.co/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const res = await data.json()
    if (data.ok) {
        return res
    } else {
        return Promise.reject(res);
    }
}

export async function login(email, password) {
    const data = await fetch('https://auth.nomoreparties.co/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password,
            email
        })

    })
    const res = await data.json();
    if (data.ok) {
        return res
    } else {
        return Promise.reject(res)
    }
}

export async function auth(token) {
    const data = await fetch('https://auth.nomoreparties.co/users/me', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    const res = await data.json();
    if (data.ok) {
        return res
    } else {
        return Promise.reject(res)
    }
}