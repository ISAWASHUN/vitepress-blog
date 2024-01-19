---
theme: page
title: ShinCode Blogs Archive
next: false
prev: false
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data.ts'
import moment from 'moment';
</script>

# ブログ記事アーカイブ

<br/>

<article v-for="post of posts" class="home-posts-article">
  <p>
    <a :href="'/shincode_blog_with_vitepress' + post.url" class="home-posts-article-title">{{ post.frontmatter.title }}</a>
  </p>
  <p>{{ post.frontmatter.description }}</p>
  <p>
    <a :href="'/shincode_blog_with_vitepress' + post.url">続きを読む</a>
  </p>
</article>

<style>
.home-posts-article {
  border-top: 1px solid var(--vp-c-divider);
  justify-content: space-between;
  padding: 10px 0;
}

.home-posts-article p {
  margin: 10px 0;
}

.home-posts-article .home-posts-article-title {
  color: var(--vp-c-text-1);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none !important;
}
</style>