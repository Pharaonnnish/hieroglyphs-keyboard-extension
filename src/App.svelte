<script>
  let keyboard;
  let leftPos = 0;
  let topPos = 0;
  let LeftClickDown = false;

  const handleMouseDown = () => {
    LeftClickDown = true;
  };

  const handleMouseUp = () => {
    LeftClickDown = false;
  };

  const handleMouseMove = (e) => {
    if (LeftClickDown) {
      leftPos += e.movementX;
      topPos += e.movementY;
    }
  };
</script>

<div class="hieroglyphs-keyboard" style="left: {leftPos}px;top: {topPos}px;">
  <div
    class="title-bar"
    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
  >
    <b>Hieroglyphs Keyboard</b>
  </div>
</div>

<svelte:window on:mouseup={handleMouseUp} />

<style>
  .hieroglyphs-keyboard {
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 45vw;
    height: 280px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: hsla(0, 0%, 0%, 0.24) 0px 3px 8px;
  }

  .title-bar {
    text-align: center;
    padding: 6px 4px;
    font-family: sans-serif;
    font-size: 13px;
    background: hsla(37, 98%, 53%, 0.4);
    user-select: none;
    cursor: move;
  }
</style>
