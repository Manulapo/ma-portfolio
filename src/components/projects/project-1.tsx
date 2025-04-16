import { cn } from "../../lib/utils";

const Project1 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8 p-4 text-gray-800", className)}>
      {/* Two Column Section */}
      <div className="gap-6 items-center">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold w-full">
            Lorem ipsum dolor sit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            sapiente labore quo aut error eos voluptates ut cumque cum pariatur
            architecto, praesentium recusandae! Sunt voluptatibus eaque saepe,
            error aperiam illum excepturi harum ullam aliquid nemo aliquam
            itaque alias veniam doloremque sit ab tenetur hic necessitatibus
            placeat molestias? Aperiam amet sunt eius animi, commodi impedit
            optio illo exercitationem voluptatum porro sit vel eaque, quam
            accusamus! Mollitia totam molestias impedit dicta magni ab laborum
            illum tenetur, dolorum, eligendi iure repellat, quidem laboriosam
            nemo? Quibusdam, dolore! Error, incidunt modi, vel recusandae
            tenetur quod id doloribus corporis, voluptas voluptate optio non
            eos! Harum expedita veniam maxime recusandae velit commodi
            voluptatem minus ad, soluta, distinctio blanditiis et voluptatum?
            Maxime sunt dolorem debitis nostrum laudantium voluptatum delectus
            itaque qui atque eius hic ea, nulla, tempora omnis consectetur esse
            incidunt sapiente! Culpa at cumque voluptates earum quae ex, labore,
            tempore dolor reiciendis natus a, quisquam eius omnis!
          </p>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            nesciunt quo recusandae soluta fugiat ea nostrum, nihil molestias
            est assumenda odit quasi? Architecto pariatur officiis similique
            fugiat eaque, earum nesciunt aperiam consequuntur ducimus, dolorum,
            eos doloremque vel! Veritatis tenetur magnam fugit, quas aliquid
            debitis optio odio quia pariatur velit nesciunt consequuntur at
            neque minima voluptatem, deleniti, laboriosam repellendus. Dolorum
            aut tempora commodi ipsum praesentium, in delectus beatae laudantium
            est nam! Voluptas eos nam molestias! Deleniti neque ea eius, unde
            aliquid optio repellat sint ducimus nobis laboriosam totam velit
            ipsam quia quidem doloribus ullam excepturi quisquam nemo, vitae
            omnis veritatis! Delectus?
          </p>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste
            enim accusamus et non eligendi repudiandae ipsum in hic laudantium
            voluptatem eaque sed fuga magnam aspernatur quis, unde debitis quos,
            consequatur adipisci vel eos amet provident. Beatae harum placeat
            odit quas repellendus, ratione voluptates modi nostrum sed non
            laboriosam tempore facere cupiditate excepturi? Voluptatem dolorem
            expedita quam maiores voluptates sit itaque, possimus quo adipisci
            sint sunt eaque, minus alias esse quibusdam ad. Laudantium rerum quo
            asperiores, explicabo dignissimos nostrum repellat, aspernatur error
            soluta quia molestias deserunt quisquam! Qui sit soluta, sequi
            officia ipsum reiciendis ea assumenda, animi libero aut, ex expedita
            modi minus nam praesentium error commodi. Maxime eaque ipsa
            consequuntur quaerat. Nobis quaerat ad autem rem aliquam magnam
            illum, laborum iste soluta expedita ea amet, veritatis enim nulla
            fugit quam omnis! Omnis repellat aperiam cumque doloribus. Vitae
            laboriosam eum velit itaque necessitatibus hic nesciunt eius,
            incidunt officiis consectetur repudiandae corrupti, consequatur
            aperiam. Cupiditate, quos architecto ea quasi unde alias expedita
            est autem, aliquam nam nemo molestiae distinctio ipsa impedit neque
            vitae et maxime sint dicta nihil dolor a voluptas provident.
            Excepturi beatae repellat laudantium sunt fugiat, harum explicabo
            doloremque aspernatur, ut est perferendis modi quidem? Earum quam
            facere odit.
          </p>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ut
            labore repellendus, corporis delectus, explicabo blanditiis a fuga
            deleniti exercitationem inventore harum consectetur eveniet nam?
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            <li>Real-time updates from your connected platforms</li>
            <li>Drag-and-drop layout editing</li>
            <li>AI-generated project summaries</li>
          </ul>
        </div>
      </div>

      {/* Image Gallery */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/random/300x200?sig=${i}`}
              alt={`Gallery ${i}`}
              className="rounded-lg object-cover w-full h-40"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project1;
