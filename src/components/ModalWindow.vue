<template>
    <transition
        name="modal-window--fade">
        <div 
            class="modal-window"
            @click.self="cancel">
            <div
                role="dialog"
                aria-labelledby="modalWindowTitle"
                aria-describedby="modalWindowDescription"
                class="modal-window__container">
                <div class="modal-window__header">
                    <h2
                        id="modalWindowTitle"
                        class="modal-window__title">
                        {{ title }}
                    </h2>
                </div>

                <div
                    id="modalWindowDescription"
                    class="modal-window__body">
                    <slot>
                        <p>Are you sure?</p>                        
                    </slot>
                </div>

                <div
                    v-if="showModalFooter"
                    class="modal-window__footer">
                    <button
                        class="button button--03"
                        aria-label="Close modal"
                        @click.prevent="cancel">
                        Cancel
                    </button>

                    <button
                        class="button button--02"
                        aria-label="Close modal"
                        @click.prevent="confirm">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalWindow",
        props: {
            title: {
                type: String,
                default: "Confirm"
            },
            showModalFooter: {
                type: Boolean,
                default: true
            }
        },
        created() {
            document.addEventListener('keydown', (e) => {
                if(e.key === 'Escape') {
                    this.$emit("onCancel");
                }
            });
        },
        methods: {
            confirm() {
                this.$emit("onConfirm");
            },
            cancel() {
                this.$emit("onCancel");
            }
        }
    };
</script>

<style lang="scss">   
    .modal-window {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        @include flexbox;
        @include align-items(center);
        @include justify-content(center);
        justify-content: center;
        background-color: rgba(0, 0, 0, .50);
    }

    .modal-window--fade-enter,
    .modal-window--fade-leave-active {
        opacity: 0;
    }

    .modal-window--fade-enter-active,
    .modal-window--fade-leave-active {
        transition: opacity .3s ease;
    }

    .modal-window__container {
        position: relative;
        min-width: 30vw;
        max-width: 50vw;
        padding: 20px;
        border-radius: 10px;
        font-family: $font-custom;
        background-color: white;
        box-shadow: 0 5px 5px 0px rgba(0,0,0, .2);
    }

    .modal-window__header {
        border-bottom: 1px solid #444;
        padding-bottom: 10px;
    }

    .modal-window__title {
        margin: 0;
    }

    .modal-window__footer {
        @include flexbox;
        @include justify-content(flex-end);
        margin-top: 50px;

        .button + .button {
            margin-left: 20px;
        }
    }    
</style>