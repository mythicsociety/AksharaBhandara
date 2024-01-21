<script setup>
import axios from 'axios';

//check if all keys in shasanas is found in files
</script>

<template></template>

<script>
export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
        }
    },
    methods: {
        fetchShasanaData() {
            axios.get(`${this.publicPath}./assets/json/shasanas.json`)
                .then(response => {
                    this.shasanas = response.data;
                    return response.data;
                }).then(shasanas => {
                    for (var s of shasanas) {
                        let encodedPath = encodeURIComponent(s.key);

                        try {
                            axios.get(`${this.publicPath}./assets/json/shasanas/${encodedPath}.json`, {
                                validateStatus: (status) => status !== 404 // return true for all status codes except 404
                            }).then(response => {
                                console.log("file found");
                            })
                            // .catch(err => {
                            //     console.log(err);
                            // });
                        } catch (error) {
                            if (error.response && error.response.status === 404) {
                                console.log("file not found");

                                // handle 404 error
                            } else {
                                // handle other errors
                            }
                        }
                    }
                })
        }
    }, mounted() {
        this.fetchShasanaData();
    },
}
</script>