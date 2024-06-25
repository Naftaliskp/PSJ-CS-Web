import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function ArticleSection() {
    return (
      <section className='container my-5 p-5'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <article>
                        <header class="mb-1">
                            <h1 class="fw-bolder mb-1">Info 1</h1>
                            <div class="text-muted fst-italic mb-2">Diunggah 14 Juni 2024</div>
                        </header>
                        <section class="mb-5">
                            <p class="fs-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p class="fs-5 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p class="fs-5 mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                    </article>            
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default ArticleSection