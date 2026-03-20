import { useState } from "react";
import API from "../servicios/api";

function PedidoForm() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    fecha_solicitud: "",
    fecha_envio: "",
    total: "",
    pagado: [],
    abono: "",
    comentario: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePagadoChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({ ...form, pagado: [...form.pagado, value] });
    } else {
      setForm({
        ...form,
        pagado: form.pagado.filter((m) => m !== value)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ✅ ruta correcta usando /api/v1
      await API.post("/pedidos", form);

      alert("Pedido guardado correctamente");

      setForm({
        nombre: "",
        telefono: "",
        direccion: "",
        fecha_solicitud: "",
        fecha_envio: "",
        total: "",
        pagado: [],
        abono: "",
        comentario: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">📦 Registro de Pedido</h2>

      <form onSubmit={handleSubmit}>

        {/* Nombre */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            maxLength="10"
            required
          />
        </div>

        {/* Dirección */}
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            required
          />
        </div>

        {/* Métodos de Pago */}
        <div className="form-group">
          <label>Métodos de Pago</label>
          <div className="pagado-grid">
            {["Efectivo", "Transferencia", "Tarjeta", "Depósito"].map((metodo) => (
              <label key={metodo} className="pagado-option">
                <input
                  type="checkbox"
                  value={metodo}
                  checked={form.pagado.includes(metodo)}
                  onChange={handlePagadoChange}
                />
                <span>{metodo}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fechas */}
        <div className="form-group">
          <div className="fechas-grid">
            <div>
              <label>Fecha Solicitud</label>
              <input
                type="date"
                name="fecha_solicitud"
                value={form.fecha_solicitud}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Fecha Envío</label>
              <input
                type="date"
                name="fecha_envio"
                value={form.fecha_envio}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Total y Abono */}
        <div className="form-group">
          <div className="fechas-grid">
            <div>
              <label>Total ($)</label>
              <input
                type="number"
                name="total"
                value={form.total}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Abono ($)</label>
              <input
                type="number"
                name="abono"
                value={form.abono}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Comentario */}
        <div className="form-group">
          <label>Comentario</label>
          <textarea
            name="comentario"
            value={form.comentario}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-submit"
        >
          {loading ? "Guardando..." : "Guardar Pedido"}
        </button>
      </form>
    </div>
  );
}

export default PedidoForm;