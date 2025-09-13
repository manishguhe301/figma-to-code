
export default function ResizableBox({
  children,
  width = 100,
  height = 400,
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
          className={className}
        >
          {children}
        </div>
      </div>
    </div>
  );
}