<template>
  <div id="add-blog" class="container">
    <h1>Add a New Blog Post with Vue Data Binding</h1>
    <form v-if="!submitted">
      <!-- Membuat input text yang menggunakan data binding-->
      <label>Blog Title:</label>
      <!-- Jadi lazy disini ketika kita enter maka datanya akan masuk-->
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog content:</label>
      <!-- Berbeda dengan content -->
      <textarea v-model="blog.content"></textarea>

      <!-- Checkbox dengan menggunakan data binding -->
      <div id="checkboxes">
        <label> Wizard </label>
        <input type="checkbox" value="wizard" v-model="blog.categories" />
        <label> Witch </label>
        <input type="checkbox" value="witch" v-model="blog.categories" />
        <label> Demon </label>
        <input type="checkbox" value="demon" v-model="blog.categories" />
        <label> Demon Hunter </label>
        <input type="checkbox" value="demon-hunter" v-model="blog.categories" />
      </div>
      <!-- SelectBox dengan menggunakan data binding-->
      <label>Author:</label>
      <select v-model="blog.author">
        <!-- Kita ga pake blog.authors karena authors berada di luar blog-->
        <option v-for="author in authors"> {{ author }} </option>
      </select>

      <!-- Membuat button v-on:click - prevent untuk mencegah refresh pada halaman page -->
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <!---->
    <div v-if="submitted">
      <h3>Thanks for adding ur post</h3>
    </div>
    <!-- Preview data binding atau v-model yang sudah dibuat-->
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content: {{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <!-- menggunakan looping dan data binding-->
        <li v-for="kategori in blog.categories">{{ kategori }}</li>
      </ul>
      <!-- Kita pake blog.author karena author berada di dalam blog-->
      <p>Author: {{ blog.author }}</p>
    </div>

    <div class="middle">
      <router-link to="/TestView" custom v-slot="{ navigate }">
        <button
          style="cursor:pointer"
          class="button-49"
          role="button"
          @click="navigate"
        >
          Test View
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Blog disini adalah sebagai property
      blog: {
        title: '',
        content: '',
        // Karena disini menggunakan array, jadi kita akan menggunakan looping atau v-for
        categories: [],
        author: ''
      },
      // kita gunakan v-for
      authors: ['Asmodeus', 'Satanas', 'Lucifer'],
      submitted: false
    }
  },
  methods: {
    // memanggil button post
    // mengirimkan data input type ke console.log
    post: function () {
      this.$http
        .post('http://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(function (data) {
          console.log(data)
          this.submitted = true
        })
    }
  }
}
</script>

<style scoped>
.container {
  color: black;
}

#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type='text'],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px /* Padding right => */ 20px;
  border: 1px /* Border menjadi titik" => */ dotted #ccc;
  margin: /* jarak antara checkbox dan preview*/ 20px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  /* inline-block membuat text menjadi horizontal */
  display: inline-block;
}

.middle {
  position: absolute;
  top: 81%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
