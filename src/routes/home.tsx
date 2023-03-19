import { h } from "preact"
import { H1 } from "../components/html/headings"
import { Hr, P } from "../components/html/content"

const Home = () => {
  return (
    <section class="container mx-auto">
      <H1 class="my-4">Company Homepage</H1>
      {/* manual hr */}
      <Hr />
      {/* or just use the prose from the typography plugin */}
      <P class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus elit purus, sed mollis nisl bibendum et.
        Vestibulum ac dui eu neque hendrerit gravida vitae at augue. Donec eget pharetra turpis, ac viverra urna. Nulla
        porta porta urna sit amet condimentum. Nam quis porta nisl, aliquam maximus sem. Phasellus consectetur a velit
        nec accumsan. Nulla finibus in urna sollicitudin bibendum. Vestibulum sit amet sem eget eros convallis blandit.
        Maecenas ultrices tristique nulla ac ultricies. Quisque commodo, neque eget finibus dapibus, arcu nulla
        tincidunt sem, eu scelerisque eros massa vitae nibh.
      </P>

      <P class="mb-3">
        Nulla justo erat, varius eu pharetra in, faucibus id mauris. Aliquam mi risus, imperdiet at lobortis vitae,
        tincidunt non nunc. Curabitur at orci purus. Donec malesuada libero gravida dolor congue interdum. Vestibulum
        pretium suscipit purus. Cras quis sem ut diam convallis malesuada eu et sapien. Nullam cursus posuere orci in
        tempus. Proin semper varius neque quis dignissim. Ut justo purus, molestie ut nunc eget, ullamcorper posuere ex.
        Suspendisse eget mi sed ipsum elementum tempus et eget velit. Praesent sed congue justo, quis blandit tellus.
        Aliquam finibus, quam ac congue sodales, orci nisi laoreet purus, sit amet molestie eros purus nec neque.
        Praesent at erat sit amet ante imperdiet commodo eget porta orci. Donec nunc libero, posuere a arcu non, aliquam
        eleifend nisl.
      </P>
      {/* prose dark text color is gray-700 */}
      <div class="prose">
        <hr />
        <p>
          Cras neque quam, dictum vitae interdum quis, feugiat sed tellus. Donec convallis tortor vel nulla placerat,
          eget ultrices lectus varius. Proin magna tortor, congue in mattis eget, semper in metus. Curabitur non maximus
          justo, ac finibus sem. Etiam metus elit, porta ut tellus eget, sollicitudin tincidunt arcu. Etiam tincidunt
          ligula pulvinar, vehicula purus quis, molestie magna. Suspendisse et sollicitudin justo, dictum porta odio.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In rhoncus rutrum
          lacus sit amet luctus. Donec vitae lacus placerat ipsum mollis tempus. Maecenas sit amet auctor ipsum. Quisque
          suscipit urna erat, in posuere eros cursus non. Phasellus aliquam id dui vitae mattis.
        </p>
      </div>
    </section>
  )
}

export default Home
