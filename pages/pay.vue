<template>
  <div class="pay">
    <section class="pay__hero">
      <h1 class="u-font-h1">The fastest way to pay in your restaurant</h1>
      <ul>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#2E6C61" />
          </svg>
          Scan the QR code
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#2E6C61" />
          </svg>
          View the bill & split it if you’d like
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#2E6C61" />
          </svg>
          Add a tip
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#2E6C61" />
          </svg>
          Pay in seconds
        </li>
        <li>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#2E6C61" />
          </svg>
          Leave a review
        </li>
      </ul>
      <div class="pay__hero-ctas">
        <a href="" target="_blank" class="c-button">Get started for free</a>
        <a href="" target="_blank" class="c-button c-button--secondary">
          Speak with our team
        </a>
      </div>
    </section>
    <section class="pay__customers">
      <h2 class="u-font-h2">Trusted by leading restaurants</h2>
      <client-only>
        <flickity
          ref="flickity"
          class="pay__customers-carousel"
          :options="flickityOptions"
        >
          <div class="pay__customers-restaurant">
            <img src="../assets/images/pitstop.png" alt="restaurant image" />
            <p>PitStop Lagos</p>
          </div>
          <div class="pay__customers-restaurant">
            <img src="../assets/images/circa.png" alt="restaurant image" />
            <p>Circa</p>
          </div>
          <div class="pay__customers-restaurant">
            <img src="../assets/images/slow.png" alt="restaurant image" />
            <p>sLoW</p>
          </div>
          <div class="pay__customers-restaurant">
            <img src="../assets/images/pitstop.png" alt="restaurant image" />
            <p>PitStop Lagos</p>
          </div>
          <div class="pay__customers-restaurant">
            <img src="../assets/images/circa.png" alt="restaurant image" />
            <p>Circa</p>
          </div>
          <div class="pay__customers-restaurant">
            <img src="../assets/images/slow.png" alt="restaurant image" />
            <p>sLoW</p>
          </div>
        </flickity>
      </client-only>
    </section>
    <section class="pay__features">
      <div class="pay__features-desc">
        <h2 class="u-font-h2">Pay in seconds in restaurants</h2>
        <div class="pay__features-tabs">
          <button>Scan</button>
          <button>Order</button>
          <button>Pay</button>
        </div>
        <div class="pay__features-copy">
          <p>
            You'll never have to worry about guests trying to order unavailable
            items or missing out on new offerings. I offer seamless menu
            management, whether you're constantly making updates or prefer a
            more static selection.
          </p>
        </div>
        <button class="c-button c-button--secondary">Get started</button>
      </div>
      <img src="../assets/images/mira-app.png" alt="Mira app image" />
    </section>
    <section class="pay__benefits">
      <div class="pay__benefit">
        <div class="pay__benefit-copy">
          <h2 class="u-font-h2">Drive direct orders from customers</h2>
          <p>
            Paying high commissions for your loyal customers is painful and
            hurts your profit margin.
          </p>
          <p>
            With Mira commission-free ordering from Instagram, WhatsApp or your
            website, offer your best customers an easy and fast way to order
            from you directly and reward them for doing so. When you're busy,
            struggling to find a waiter can be frustrating for your guests,
            especially when they're hungry or thirsty.
          </p>
        </div>
        <img src="../assets/images/order-guest.png" alt="" />
      </div>
      <div class="pay__benefit">
        <div class="pay__benefit-copy">
          <h2 class="u-font-h2">Drive more sales</h2>
          <p>
            Another way to up-sell to your customers.‍ Tailor your digital menu
            by the time of the day (breakfast bundle, happy hours,...), add
            smart recommendations for each dish and increase your average basket
            by up to 34%.
          </p>
        </div>
        <img src="../assets/images/order-guest.png" alt="" />
      </div>
      <div class="pay__benefit">
        <div class="pay__benefit-copy">
          <h2 class="u-font-h2">One-click Delivery Solution</h2>
          <p>
            With our integration with Careem, you can request a delivery rider
            at the click of a button! No more external 3rd party contracts,
            tedious onboarding, and manual logistics. With ChatFood delivery
            powered by Careem, you can ensure your customers receive live
            updates and get their food on time.
          </p>
        </div>
        <img src="../assets/images/order-guest.png" alt="" />
      </div>
      <div class="pay__benefit">
        <div class="pay__benefit-copy">
          <h2 class="u-font-h2">Sell anytime</h2>
          <p>
            Stop losing customers because they can't order in advance. Enable
            your customers to schedule orders up to 30 days in advance, and make
            money even when you're offline with a service that can work while
            you don't.
          </p>
        </div>
        <img src="../assets/images/order-guest.png" alt="" />
      </div>
      <div class="pay__benefit">
        <div class="pay__benefit-copy">
          <h2 class="u-font-h2">Stay close to customers</h2>
          <p>
            Avoid negative online reviews that can hurt your brand. With Mira
            private feedback and inbox, all your customers' messages and
            feedback are in one place and enriched with sales data. Your team
            can solve queries efficiently and privately without hurting your
            business's reputation.
          </p>
        </div>
        <img src="../assets/images/order-guest.png" alt="" />
      </div>
    </section>
    <section class="pay__contact">
      <h3>Get started with Mira</h3>
      <form action="" class="pay__contact-form">
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
    <section class="pay__faqs">
      <h2>Got questions? We’ve got answers</h2>
      <div ref="faqsWrapper" class="pay__faqs-wrapper">
        <img src="../assets/images/slow.png" alt="restaurant image" />
        <div class="pay__faqs-faq">
          <h5>Is Mira an app?</h5>
          <p>
            Mira provides an easy and fast way to order and pay at restaurants.
            Mira provides an easy and fast way to order and pay at restaurants.
          </p>
        </div>
        <div class="pay__faqs-faq">
          <h5>Does Mira provide menu with pictures?</h5>
          <p>
            Mira provides an easy and fast way to order and pay at restaurants.
            Mira provides an easy and fast way to order and pay at restaurants.
          </p>
        </div>
        <div class="pay__faqs-faq">
          <h5>Does Mira provide menu with pictures?</h5>
          <p>
            Mira provides an easy and fast way to order and pay at restaurants.
            Mira provides an easy and fast way to order and pay at restaurants.
          </p>
        </div>
        <div class="pay__faqs-faq">
          <h5>Does Mira provide menu with pictures?</h5>
          <p>
            Mira provides an easy and fast way to order and pay at restaurants.
            Mira provides an easy and fast way to order and pay at restaurants.
          </p>
        </div>
        <div class="pay__faqs-faq">
          <h5>Does Mira provide menu with pictures?</h5>
          <p>
            Mira provides an easy and fast way to order and pay at restaurants.
            Mira provides an easy and fast way to order and pay at restaurants.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 3000,
      },
    }
  },
  mounted() {
    this.initFaqs()
  },
  methods: {
    initFaqs() {
      const faqs = [
        ...this.$refs.faqsWrapper.querySelectorAll('.pay__faqs-faq'),
      ]

      faqs.forEach((faq, index) => {
        const handleClick = () => {
          const faqBody = faq.querySelectorAll('p')[0]
          if (faqBody.offsetHeight === 0) {
            faq.classList.add('active')
          } else {
            faq.classList.remove('active')
          }
        }

        faq.addEventListener('click', handleClick)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.pay {
  section {
    margin-bottom: 15rem;

    @include screen('small') {
      margin-bottom: 12rem;
    }
  }

  &__hero {
    max-width: 126rem;

    ul {
      margin: 2.8rem 0 3rem;

      svg {
        margin-right: 0.4rem;
      }
    }

    &-subtext {
      font-size: 2.4rem;
      line-height: 3rem;
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
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transform: scale(1.13);
      }
    }
  }

  &__features {
    display: flex;
    justify-content: space-between;

    &-content {
      display: flex;
      flex-shrink: 0;
      width: 80rem;
    }

    img {
      max-width: 55rem;
    }

    &-tabs {
      position: relative;
      display: flex;
      width: 40rem;
      height: 7rem;
      margin-top: 5.9rem;
      background: #2e6c6133;
      border-radius: 5rem;
      overflow: hidden;
      padding: 0.5rem;

      &::before {
        content: '';
        position: absolute;
        width: 33.33%;
        height: 100%;
        left: 0;
        top: 0;
        background: #2e6c61;
        border-radius: 100px;
      }

      button {
        position: relative;
        width: 33.33%;
        text-transform: uppercase;
        font-size: 1.6rem;
        border: none;
        font-weight: 500;
        background: transparent;
        color: #2e6c61;

        &:first-of-type {
          color: white;
        }
      }
    }

    &-copy {
      max-width: 54rem;
      margin-top: 5.2rem;
      margin-bottom: 3rem;
    }
  }

  &__customers {
    &-carousel {
      margin-top: 7.6rem;
      width: 100vw;
      position: relative;
      width: 100vw;
      left: calc(-50vw + 50%);
    }

    &-restaurant {
      width: 22%;
      margin: 0 2rem;

      img {
        width: 100%;
        object-fit: cover;
        height: 52rem;
        background: grey;
        border-radius: 3rem;
      }

      p {
        text-align: center;
        margin-top: 2rem;
      }
    }
  }

  &__benefits {
    margin-top: -6rem;
  }

  &__benefit {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 9rem;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      .pay__benefit-copy {
        margin-right: 0;
        margin-left: 7rem;
      }
    }

    &-copy {
      max-width: 60rem;
      flex-shrink: 0;
      margin-right: 7rem;

      h2 {
        margin-bottom: 2.4rem;
      }

      p:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    }
  }

  &__faqs {
    h2 {
      max-width: 97rem;
    }

    &-wrapper {
      position: relative;
      width: 100vw;
      margin-top: 9.4rem;
      left: calc(-50vw + 50%);

      img {
        position: absolute;
        z-index: -1;
        border-radius: 3rem;
        width: 70rem;
        height: 75rem;
        object-fit: cover;
        left: -6.5%;
        transform: rotate(12deg);
      }
    }

    &-faq {
      cursor: pointer;
      margin-left: auto;
      border-top-left-radius: 3rem;
      border-bottom-left-radius: 3rem;
      border: 1px solid #2e6c61;
      padding: 4rem 18rem 4rem 6rem;
      background: white;
      color: #2e6c61;

      &.active {
        background: #2e6c61;
        color: white;

        p {
          height: auto;
          margin-top: 1.8rem;
        }
      }

      h5 {
        font-size: 3rem;
      }

      p {
        font-size: 2.2rem;
        height: 0;
        overflow: hidden;
      }

      &:not(:first-child) {
        margin-top: 2.9rem;
      }

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          width: 45% + $i * 5;
        }
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
