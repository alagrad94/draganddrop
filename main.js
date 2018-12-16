const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        let stages = document.querySelectorAll(".stage")

        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            e.dataTransfer.setData("text", e.target.classList)
          }
        })


        const dropTargets = document.querySelectorAll(".target, .origin")
        const origin = document.querySelector(".origin")


        dropTargets.forEach(dropTarget => {
          // Dragover not supported by default. Turn that off.
          dropTarget.ondragover = e => e.preventDefault()

          dropTarget.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()

            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")

            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            if (dropTarget.hasChildNodes()) {
              return;
            } else {
              e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
          }
        })
      }
    }
  })

  DragDropManager.init()