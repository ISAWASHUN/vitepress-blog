---
theme: page
title: ブログ記事一覧
next: false
prev: false
---

<script setup>
import { data as posts } from '../.vitepress/theme/posts.data.ts'
import moment from 'moment';
</script>

# ブログ記事アーカイブ

<br/>

<ul>
  <li v-for="post in posts">
    <a :href="'/shincode_blog_with_vitepress' + post.url" class="home-posts-article-title">{{ post.frontmatter.title }}</a>
  </li>
</ul>
