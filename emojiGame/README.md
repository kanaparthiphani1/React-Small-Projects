In this project I have built an **Emoji Game** by using React.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif" alt="emoji-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

- The _Score_ and _Total Score_ for the current game should be **0** initially.
- When an **Emoji** is clicked

  - If the clicked emoji is not the same as any of the previously clicked emojis
    then the _Score_ should be increased by **1**.
  - If all the emojis are clicked exactly once

    - The _Game status_ along with _Best score_ and _Play Again_ button should
      be displayed as shown in the **design file (won game)**.
    - The _Best score_ should be equal to the _Top Score_

  - If the clicked emoji is the same as any of the previously clicked emojis

    - The _Game status_ along with _Current score_ and _Play Again_ button
      should be displayed as shown in the **design file (lose game)**.

    - If the score achieved in the current game is higher than the previous
      scores then the _Top Score_ should be updated accordingly.

- When the _Play Again_ button is clicked, then we should be able to play the
  game again.

- The _Play Again_ button should reset the game and _Score_ value but not the
  _Top Score_ value.
