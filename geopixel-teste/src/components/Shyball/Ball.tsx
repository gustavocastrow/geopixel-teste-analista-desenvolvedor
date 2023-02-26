interface BallProps {
  stalker?: boolean
  width: number
  height: number
  top: number
  left: number
  onHover: () => void
}

export function Ball({onHover, height, left, top, width, stalker = false   }: BallProps){
  return (
    <>
      {stalker && (
        <div
          style={{
            boxSizing: "border-box",
            position: "absolute",
            top,
            left,
            width,
            height,
            border: "1px solid #F00",
            borderRadius: "100%",
            transitionDelay: "200ms",
            transitionDuration: "300ms"
          }}
        />
      )}
      <div 
        style={{
          boxSizing: "border-box",
          position: "absolute",
          top,
          left,
          width,
          height,
          background: "#FF6347",
          borderRadius: "100%",
          transition: "300ms",
          boxShadow: "0 0 10px 4px #CCC",
      }}
      onMouseEnter={onHover}
     />
    </>
  )

}