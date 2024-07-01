const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
  },
  // SE AGREGAN 3 CARDS

  {
    nombre:
      "Amplia casa en uno de los barrios más exclusivo de CA.",
    src: "https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi-trestle.corelogic.com%2Ftrestle%2FMedia%2FCRMLS%2FProperty%2FPHOTO-jpeg%2F1040202318%2F1%2FMTU3Mi84MzQwLzIw%2FMjAvMTY2MzUvMTcxNTc4MTA2Mw%2F6Fy4-l7s9RGFScm0WBkmRaym6FpLoPgiKHDJ9jA9Rpw%3Fdate%3D2024-07-01&option=N&permitphotoenlargement=false&w=1024",
    descripcion:
      "Propiedad con más de 1000 m2",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 6,
    baños: 4,
    costo: 5.5,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Se alquila casa para eventos",
    
    src: "data:image/jpeg;base64,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",
    descripcion:
      "Se alquila hermosa casa a las afuera del centro de LA.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 6,
    baños: 3,
    costo: 3.2,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Se alquila hermosa casa con más de 500 M2",
    src: "data:image/jpeg;base64,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",
    descripcion:
      "Amplio casa en San Diego",
    ubicacion: "567 Skyline Avenue, Skyview City, SD 56789",
    habitaciones: 5,
    baños: 3,
    costo: 3.2,
    smoke: false,
    pets: true,
  },
];

const arriendo_prop = document.querySelector("#alquiler");

for (let prop_arriendo of propiedades_alquiler) {
  const HTML = `
  <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${prop_arriendo.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${prop_arriendo.nombre}
                </h5>
                <p class="card-text">
                ${prop_arriendo.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${
                    prop_arriendo.ubicacion
                  }
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    prop_arriendo.habitaciones
                  } Habitaciones
                </p>
                <p>
                <i class="fas fa-bath"></i> ${prop_arriendo.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop_arriendo.costo}</p>
                
<p class="text-${prop_arriendo.smoke ? "success" : "danger"}">
    <i class="fas fa-smoking${prop_arriendo.smoke ? "" : "-ban"}"></i> ${
    prop_arriendo.smoke ? "Permitido fumar" : "No se permite fumar"
  }
</p>
    <p class="text-${prop_arriendo.pets ? "success" : "danger"}">
    <i class="fas fa${prop_arriendo.pets ? "-paw" : "-ban"}"></i>
    ${prop_arriendo.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
</p>
              </div>
            </div>
          </div>
  </div>
  `;
  arriendo_prop.innerHTML += HTML;
}