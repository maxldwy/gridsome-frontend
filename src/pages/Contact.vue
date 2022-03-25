<!--
 * @Author: 王越
 * @Date: 2022-03-22 10:04:43
 * @LastEditTime: 2022-03-25 13:10:24
 * @LastEditors: 王越
 * @Description:
-->
<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>
          Leave me a note with any questions you might have, I'll get back to
          you as soon as possible.
        </p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label
            ><input v-model="form.name" type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label
            ><input v-model="form.email" type="email" name="email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label
          ><textarea v-model="form.message" name="message"></textarea>
        </div>
        <button class="button" @click.prevent="submit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import axios from "axios"

export default {
  name: "List",
  metaInfo: {
    title: "Contact us",
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    }
  },
  methods: {
    async submit() {
      try {
        const { data } = await axios.post(
          process.env.GRIDSOME_API_URL + "/contacts",
          this.form
        )
        this.form = {
          name: "",
          email: "",
          message: "",
        }
        alert("发送成功")
      } catch (error) {
        alert("发送失败")
      }
    },
  },
}
</script>
