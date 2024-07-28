import React from 'react'

export default function Textform() {
  return (
    <div>
      <form>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">Comments</label>
        </div>
      </form>
    </div>
  )
}
