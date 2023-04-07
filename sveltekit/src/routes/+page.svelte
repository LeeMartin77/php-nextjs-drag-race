<script lang="ts">
  import type { MockData } from "./+page.server"
export let data: {
  data: MockData[];
  rand: number;
}

</script>

  <div>
    {data.rand}
  </div>
  {#each data.data as md}
    <div>
      <h1>{md.dob}</h1>
      <h2>{md.salary}</h2>
      <p>{md.description}</p>
      <ul>
        <li>{md.address.street}</li>
        <li>{md.address.town}</li>
        <li>{md.address.postode}</li>
      </ul>
      <button>{md.verified ? "Yes" : "No"}</button>
    </div>
  {/each}