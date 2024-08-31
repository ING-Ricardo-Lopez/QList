import React from "react";

// Componente Label
const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

// Componente Input
const Input = ({ id, type = 'text', placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  );
};

// Componente Button
const Button = ({ type = 'button', className, children }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 ${className}`}
    >
      {children}
    </button>
  );
};

export default function Component() {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-8 border rounded-lg shadow-lg">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Generador de Códigos QR para Registro de Asistencia</h1>
        <p className="text-muted-foreground">
          Crea códigos QR personalizados para facilitar el registro de asistencia en tus eventos.
        </p>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Ingresa tu nombre" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Fecha</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event">Evento</Label>
            <Input id="event" placeholder="Ingresa el nombre del evento" />
          </div>
          <Button type="submit" className="w-full">
            Generar Código QR
          </Button>
        </form>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Cómo usar el Código QR</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Imprime o guarda el código QR generado.</li>
            <li>Pide a los asistentes que escaneen el código QR con su dispositivo móvil.</li>
            <li>El código QR registrará automáticamente la asistencia.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
