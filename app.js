document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("districts-list");

  if (!contenedor) {
    console.error("No se encontró el espacio para mostrar los distritos.");
    return;
  }

  contenedor.innerHTML = "<p>Cargando distritos...</p>";

  try {
    if (!window.supabase || !window.supabaseClient) {
      throw new Error("No se pudo inicializar la conexión con Supabase.");
    }

    const { data, error } = await window.supabaseClient
      .from("districts")
      .select("id, name, slug, summary")
      .eq("published", true)
      .order("sort_order", { ascending: true });

    if (error) throw error;

    if (!data || data.length === 0) {
      contenedor.innerHTML =
        "<p>Próximamente agregaremos información turística.</p>";
      return;
    }

    contenedor.innerHTML = "";

    data.forEach((district) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "district-card";

      const titulo = document.createElement("h3");
      titulo.textContent = district.name;

      const descripcion = document.createElement("p");
      descripcion.textContent =
        district.summary || "Descubrí los atractivos de este distrito.";

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(descripcion);
      contenedor.appendChild(tarjeta);
    });

    console.log("Distritos cargados:", data.length);
  } catch (error) {
    console.error("Error al cargar distritos:", error);
    contenedor.innerHTML =
      "<p>No pudimos cargar los distritos. Revisá tu conexión e intentá nuevamente.</p>";
  }
});
