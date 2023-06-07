<template>
    <div>
        <!-- Your component content -->
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        logout() {
            const token = localStorage.getItem("token");
            console.log(token);
            axios
                .post("/api/logout", null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log("louout done")
                    // Handle the successful logout
                    // Redirect the user to the login page or perform any other necessary actions
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        // User is unauthenticated, handle the logout accordingly
                        // Redirect the user to the login page or perform any other necessary actions
                    } else {
                        console.log(error.response.data.message);
                        // Handle other errors
                    }
                });
        },
    },
};
</script>
