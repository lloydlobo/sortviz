<script lang="ts">
  const yearCurrent = new Date().getFullYear();
  const author = "Lloyd Lobo";
  const url = "https://github.com/lloydlobo/";
</script>

<footer class="footer flex flex-col justify-center">
  <p class="footer-author text-sm">
    Made with <span class="text-rose-500">♥</span> by
    <span class="author"><a href={url}>{author}</a></span>
  </p>

  <p class="copyright text-xs">&copy;&nbsp;{yearCurrent}</p>
</footer>
