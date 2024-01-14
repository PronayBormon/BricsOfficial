<template>
  <div>
    
    <div class="main_content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div v-if="postData.id" class="business_details">
                        <img :src="postData.image" class="img-fluid" loading="lazy" alt="">
                        <div class="ex_co d_list">
                            <div class="d-flex">
                                <h6>Tuesday, October 3, 2023</h6> &nbsp;
                                <img src="../../assets/images/flags/russia-26896.svg" class="img-fluid" loading="lazy" alt="">
                            </div>

                        </div>
                        <div>
                            <h3>{{ postData.title }}</h3>

                           {{ postData.description }}

                        </div>
                    </div>
                    <div v-else>
                      Looding...
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'; // Assuming you're using axios for HTTP requests

export default {
  data() {
    return {
      postData: {} // Object to store the post data
    };
  },
  mounted() {
    this.fetchPostData();
  },
  methods: {
    fetchPostData() {
      const postId = this.$route.params.id;

      axios.get('../../../src/assets/post.json')
        .then(response => {
          const posts = response.data;
          this.postData = posts.find(post => post.id == postId);
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
    }
  }
};
</script>
