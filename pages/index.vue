<template>
  <div class="home">
    <section class="home__hero">
      <h1 class="u-font-h1">Modern point-of-sale for african restaurants</h1>
      <p class="home__hero-subtext">
        Whether you run a single restaurant, bar, club, cafe, hotel or a chain
        of venues, enhance your order management and improve your revenue.
      </p>
      <div class="home__hero-ctas">
        <a href="" target="_blank" class="c-button">Get started for free</a>
        <a href="" target="_blank" class="c-button c-button--secondary">
          Speak wit our team
        </a>
      </div>
      <div class="home__hero-media">
        <img src="" alt="" />
      </div>
    </section>
    <section class="home__features">
      <h2 class="u-font-h2">
        Serve effortlessly, and without a hitch, anywhere.
      </h2>
      <div class="home__features-list">
        <div class="home__features-item">
          <img src="" alt="" />
          <p>Sell with ease, from behind the counter</p>
          <a href="">
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4D9FEA"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div class="home__features-item">
          <img src="" alt="" />
          <p>Sell with ease, from behind the counter</p>
          <a href="">
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4D9FEA"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div class="home__features-item">
          <img src="" alt="" />
          <p>Sell with ease, from behind the counter</p>
          <a href="">
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4D9FEA"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
    <section class="home__advantages">
      <h2 class="u-font-h2">YOU SHOULD SWITCH TO MIRA</h2>
      <p>
        Say goodbye to outdated, unreliable systems. Ditch the old pen and paper
        methods. With Mira, you've got everything from payment handling and menu
        oversight to online orders.
      </p>
      <div class="home__advantages-list">
        <div class="home__advantages-others"></div>
        <div class="home__advantages-mira"></div>
      </div>
    </section>
    <section class="home__offerings">
      <h2 class="u-font-h2">mira is AN ALL-IN-ONE POINT OF SALE system</h2>
      <div class="home__offerings-list">
        <div class="home__offerings-item">
          <img src="" alt="" />
          <p>Manage your floor plan</p>
          <p>Sell with ease, from behind the counter</p>
        </div>
        <div class="home__offerings-item">
          <img src="" alt="" />
          <p>Manage your floor plan</p>
          <p>Sell with ease, from behind the counter</p>
        </div>
        <div class="home__offerings-item">
          <img src="" alt="" />
          <p>Manage your floor plan</p>
          <p>Sell with ease, from behind the counter</p>
        </div>
        <div class="home__offerings-item">
          <img src="" alt="" />
          <p>Manage your floor plan</p>
          <p>Sell with ease, from behind the counter</p>
        </div>
      </div>
    </section>
    <section class="home__operations">
      <h2 class="u-font-h2">Optimise your operations</h2>
      <p class="home__operations-subtext">
        Streamline your operations across various locations, sales channels, and
        staff to boost both efficiency and profits.
      </p>
      <div class="home__operations-list">
        <div class="home__operations-item">
          <p>Empower your team</p>
          <p>Set staff permissions to control what employees can access.</p>
        </div>
        <div class="home__operations-item">
          <p>Manage your menu</p>
          <p>Upsell with ease, build and update your menus from anywhere.</p>
        </div>
        <div class="home__operations-item">
          <p>Stay on top of inventory</p>
          <p>
            Receive inventory, manage stock, and create purchase orders from a
            single platform.
          </p>
        </div>
      </div>
    </section>
    <section class="home__contact">
      <h3>Get started with Mira</h3>
      <form action="" class="home__contact-form">
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Restaurant address" />
        <div>
          <input type="text" placeholder="Restaurant name" />
          <input type="telephone" placeholder="Phone number " />
        </div>
        <button class="c-button c-button--white">
          Get in touch with the tean
        </button>
      </form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  section {
    margin-bottom: 15rem;

    @include screen('small') {
      margin-bottom: 12rem;
    }
  }

  &__hero {
    max-width: 126rem;

    &-subtext {
      font-size: 2.4rem;
      line-height: 2.6rem;
      margin: 1.2rem 0 3rem;
      max-width: 100rem;

      @include screen('small') {
        margin: 2.2rem 0 3.2rem;
      }
    }

    &-ctas {
      a:not(:last-child) {
        margin-right: 1rem;
      }
    }

    &-media {
      position: relative;
      width: 140rem;
      left: calc(-70rem + 50%);
      background: grey;
      height: 70rem;
      border-radius: 5rem;
      margin-top: 9.6rem;
      box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.4);
    }
  }

  &__features {
    &-list {
      position: relative;
      width: 140rem;
      left: calc(-70rem + 50%);
      margin-top: 7.6rem;
      display: flex;
      justify-content: space-between;
    }

    &-item {
      width: 31%;

      img {
        background: #c4c4c4;
        width: 100%;
        height: 52rem;
        border-radius: 3rem;
      }

      p {
        margin-top: 2.3rem;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $color-blue;

        svg {
          margin-left: 1rem;
          transform: translateY(20%);
        }
      }
    }
  }

  &__advantages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2,
    p {
      max-width: 81rem;
      text-align: center;
    }

    p {
      max-width: 90rem;
      margin-top: 2.3rem;
    }

    &-list {
      position: relative;
      width: 140rem;
      left: calc(-70rem + 50%);
      margin: 7.7rem auto 0;
      border-radius: 5rem;
      overflow: hidden;
      height: 54rem;
      display: flex;

      & > :first-child {
        background: #c4c4c4;
        width: 50%;
      }

      & > :last-child {
        background: $color-dark-green;
        width: 50%;
      }
    }
  }

  &__offerings {
    &-list {
      position: relative;
      width: 140rem;
      left: calc(-70rem + 50%);
      margin: 7.7rem auto 0;
      border-radius: 5rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-item {
      width: 48%;
      margin-bottom: 4.2rem;

      img {
        width: 100%;
        height: 40rem;
        background: #c4c4c4;
        border-radius: 3rem;
      }

      P:first-of-type {
        font-size: 3.2rem;
        margin: 1.5rem 0;
      }
    }
  }

  &__operations {
    position: relative;
    padding: 13rem 0;
    color: white;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100vw;
      left: calc(-50vw + 50%);
      background-color: $color-dark-green;
      z-index: -1;
    }

    h2 {
      color: #c6f8db;
    }

    &-subtext {
      margin-top: 2.3rem;
      max-width: 85rem;
    }

    &-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 8rem;
    }

    &-item {
      width: 33%;
      max-width: 36rem;

      p:first-of-type {
        font-size: 3.2rem;
        margin-bottom: 1rem;
        color: #c6f8db;
      }

      p:last-of-type {
        font-size: 1.6rem;
        line-height: 2.8rem;
      }
    }
  }

  &__contact {
    background-color: $color-dark-green;
    border-radius: 3rem;
    padding: 10rem;
    margin-top: 19rem;
    color: white;
    box-shadow: 0px 30px 50px 0px #00000066;

    h3 {
      text-align: center;
      font-size: 4.8rem;
    }

    form {
      margin-top: 9.6rem;
      font-size: 1.6rem;

      > * {
        margin-bottom: 2rem;
      }

      input {
        background: #17382e;
        border-radius: 2rem;
        border: none;
        color: white;
        padding: 2rem 2.7rem;
        width: 100%;

        &::placeholder {
          color: white;
        }
      }

      div {
        display: flex;
        justify-content: space-between;

        input {
          width: 49%;
        }
      }

      button {
        margin-top: 1rem;
      }
    }
  }
}
</style>
