<script>
  let phoneInput = "92";
  $: phoneHref = `https://api.whatsapp.com/send?phone=${phoneInput}`;
</script>

<main>
  <h1>Direct WhatsApp</h1>
  <p>
    Enter phone number to directly send whatsapp message. Dont forget to add
    country code.
  </p>
  <input bind:value={phoneInput} type="tel" />

  <p>📲 Click on link to chat 🟢</p>
  <p>
    <a href={phoneHref}>+{phoneInput}</a>
  </p>
</main>

<style>
  input {
    width: 90%;
    height: 1.5rem;
    text-align: center;
    font-weight: 400;
    font-size: 1.1em;
  }
</style>
