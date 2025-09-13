
export default function ResizableBox({
  children,
  width = 100,
  height = 350,
  style = {},
  className = "",
}) {
  return (
    <div >
      <div
        className={`inline-block w-auto bg-white rounded-lg ${style}`}
      >
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`max-sm:w-full ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}