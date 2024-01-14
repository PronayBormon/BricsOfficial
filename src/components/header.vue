<template>
    <header>
        <div class="top_nav bg-body-tertiary">
            <div class="container">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/"><img src="../../frontend/images/brics_logo.png"
                                    class="img-fluid" loading="lazy" alt=""></a>

                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                                aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <RouterLink class="nav-link " to="/">Home</RouterLink>
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink class="nav-link " to="/business">Business</RouterLink>
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink class="nav-link " to="/about">What is BRICS?</RouterLink>
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink class="nav-link " to="/wallet">Wallet</RouterLink>
                                        </li>
                                        <!-- <li class="nav-item">
                                            <RouterLink class="nav-link " to="/bbpost">Post</RouterLink>
                                        </li> -->
                                        <li class="nav-item">
                                            <RouterLink class="nav-link" to="/test">Test</RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>



                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.router-link-active {
    color: #000;
    font-weight: 600;
}</style>