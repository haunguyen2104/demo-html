import React from 'react'
import './card.scss'
const Card1 = () => {
    const imageUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUXFxUVFxcWGBgYFxcVFRUXFhUVFRUYHyggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFysdHSUtLS0rLS0tLSstLTUtLS0tLS0tLS0tLTcrKysrKzYtLS0tLS0tLS0tLS0tKysrLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEEQAAIBAgIGBwYEBQQABwAAAAECAAMRBFESITFhkaEFBhNBUnHwFCJigbHhIzJC0TNyksHxB0NTgiRjc6KjstL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAQEBAQEAAAAAAAAAAAARAQJRITES/9oADAMBAAIRAxEAPwDzQC5CSwyiQx9GMBPozk6Law2CDp7uUWdLMyw5HeJFFp7uUHT3coPanMcJRds+UA+03SFxFaRzlaRziFP7YZHhJ2l+4xGvOMQE5yQOH8ph2+GKFM584a0xu4wo7fD9JNA+Ecpa0b5cZZw/q8ip2R8I4iQ0/hHESloj0ZOyGUCmp/COUE0/h+kM0/lFkDOAJp/D9IJpHw84RAlaMqB7I+HnK7M5c4RB9XgW8oF2OQgNeWRugEetcCGVc7pRAgsoPdzgq2vui2O4SnpbucS6jKIhhO6BfdFWHowWAlgaTFsd0DVKa0Ipjuiz5Sz5wWXfKJfdJB0ZUD0nZeUZTU+jHLRG/jDFEb4ITb1eCEO+aDSXIyjh13yVYUEME0b93OaBh1zMoUB3RVjK2G77QSnq02diN8IUlikZVp6tnKEq2zmrQA8XEwK9ami6VRiq5knWclG0ncJKQv5cph6S6Wp0dR95/Avd/Of0+Ws7u+cjpTrGzXWjpIniJ/EYeY/IPLXv7pwpvOfWN78em6E6ZepVKOQAwJWwtYjXbfqvtynorHxGfPMJX7N1fwsD8gdY+YuJ9KRVIuAxB1jZsOyZ7yNcbcJVd8LRv3R3Zrk3AQuyX4+Ey3CQuYgaA9CajQTN4tqSfHBCGC5cooqN/CP7NfiglB8UDMV3nhKPz+c0GkPiMrsh4TCMhEErvms0x4TxkFL4ZaRianvgdmM+c6BpHwwWp/DJSMByv9YhlGY4Totq/TFvfwy1I5joN3CLKjLlOi4PhEQyDwy1IQdHIQSF3SYlbWsLCZy26A0ld0WziAzxTNCG6Yz+suIv58JUo9utXdD7Yev8xAxKb+AlnFJv4SLT+23euMsVd0QcUnoGCcQpiLWk1RlJ2g9f4mcVl3S+0TdJFpxqL6/xDVxewvfyv/aYcXjKVJQ1QgA6wLXd7eBb6/M2G+eT6V6derdVHZ0z+kH3mH/mN3+QsNx2y5zU3qPQdLdZUpXWnao+w/8AGvmw/Odw1b+6eQxmMeq2nUYseQGSgalG4REk6ZmY5b1upJJJKyk951Y6QLYdRtKe4f8Ar+X/ANtp4Od/qfibVGpk6mFx/Mv2PKZ7y43xs17IYo5co32k5cpkAhWnJ2unnFnKLOJ3fWKlCCme0HISe0bhFwSwzEFM7fykFb1qiDbOUCPQiFaRVHrR/eM7VZiuuXKECvofaCtD1hmOcW9Ueif3gmouXKQuu/h95FA9Uev8zO7+vRjzVXI8PvBeoMm4feVGRqm4RZqjKaHcZNwiXIyPD7wjLiDpC1pjNPz5TpG2TcIDP58JUc4p58oBTcZ0C3nAJlSMOgMjJNmuSEdHs8oSpNvsh8J4QlwZyPCUzHPZNcPROc3exmY+k8VTw/8AEJ0rXFNfzm+wtfUg3nXkDC/ikosdh2C5vYADMk6gN5nJx/TypdaNnb/kI9xf5FP5zvOrcds5XSnS9StqNlS9xTW+juLd7tvPytOfNZyxvXg69ZnYu7FmO0k3JgSSTTCSSSQJJJJAk0dH4rsqqVPCwJ8tjciZnkgfXVoX1g7cgP2l+zef9I/ac/qdiDVwyG+tL02802fPR0eM7rU2znn/ADY9efcrB7ON/wDT9pRpDf8A0/abWW0UQc+cEZmVcjwgWXLlNLUzu4wdA7uMqM5QehAsBnwmo0z6MDsWzHGBnsN8jIN8caTZjj9pXZNu4/aQZ9Ab5NAb5oFFt3GWaLZjiIIyml5xTU/5psNE58xFtRbMQRiKfzRbr5zY1FsxFPQfMQkY2Ub+EQ6efKa3wzZ84hqDZjjKjK6+fGLK+c0thmzEUcO3r/EqE6AkhGi2XrhJCPWlhmecAkZnnDFVvh5ftCFQ7uUqgoVUV1ZrkKysQQSCAQSDPmnTGn7RWNUk1DUcsT3ksTf53Bn0xna+rR5fvPKddsATo4gAd1N7W/6Nq+a/0zXOs958eTkkkm3JJJJIEkkkgSSSSBJJJ0+rXR5r4mnTFFqy6QLop0fc7yz/AKR9dnfA9B/p4lf8XQRzTNjpAHR0xcEA95tbZlPSN0ltBJuNRF9dxnN/SnW2hhdCnRpo1JPdd1YLTp2/200blqltYFrHfrK6Ew+E6Tp9rTur7L20aq2tcOuxwLjWLjXqMx1xdrtz1Mjje2nM/wBUntZzP9U53S3RVbCH8SmGp7BUXWu7S8J3H5EzPTxCHumI1/TsnFNmeMFcUx/VzM54ZTl/UJdx6N4i10+3bxc5RxTeLmZguM/XCXf4hJCtbVn8Z4xT137nPH7xRO6/ygEbuUQpvbv4uf3k7Wp4ucSUB9feCaQ9H7wHh38fOKqVWH6ucWVyA4/eLZGiFPWq3j+sp2bxzMKZzl6EJRF28XOJd28XOW3nAI3/AElAlm8f1indvF9YbcYtl9aoQBqHxHnJJfzkhHpBijksL2zcJlC+Uq3lNFahi9w5fvAxGjURqbj3XBU2AuL943g2PymfS3SxY5SLXz/FYdqbtTb8ykqfl3jcdvzip6brfg7ha6jKm9v/AI24Ar8lznmZ1zXHcmpJJJCJJJJAkkk9l0J1TSmErY+66f8ABwouKtZj+UP/AMaE2FzbWRcjYSuX1a6r1cVeoT2eHW+nWYatW1aa7XbcPrqPexPS9KhQVcMr0sKWs90BrYr4ndrhKbC+pgL67XFwodK9KviNBQlMvSJ7LD0z+DSVddwt9CrVSxvZgLdxFwOdch+0UO1SorF6qOHRCddTRdtTaIF27RgF2g7HhS6tNT+HU7NtV6FEBqeiXtYOdtO4t7rMdLUbi4Y3U00em96lLEn3U7GxVAhsAFGw31NTRtV9Y2rDpMf9lqdYrftKtS6mmjEr+GzkOKZv+cEtc2AW9m1dF9CvWd8JhlqhHszVydJCouNZFlNM3I1HTOu4P5QHsOq3XZarrg8To1arXQ1aK6VJu6zrtOZZV0RlYEzT1g6gi5fDe423syfcb+Rv0+Wzynluh8JicLimoYHsqwt2dSqpUsGYbXYgmkVIawAZdViGIM+ldWeg/ZaZU1alRnYu7OxN2PfbYDv+sStY+WVEamxp1FKONqsNf3G8TQij1qn1fpToejiF0aqBrbDsZd6ttE8B051VrYa7oO2pZge+o+NR3bxymN5arl6Hlxl6Plzi6VW/6frHKNx9fKYUPZbxItMZwiwy5wRbIcYVejvk7HeOEtRvHH7Qw9u5T68oCjTt3jhAYerTUWJ2AD5GD2b930MisRO7lB4j5Ga2oP6tANBu/wCsJGQ/OCb915qbDMe/nFnDHxDjKRmcHIxLL5zW2Gbx84o4Y58zFSM2gZJo9lOfMyQR0VK5+uMZ2qnVA9n3cjItHdymkXpLnKuuR+UYtHdyMIYfdykVnrU1qK1Nr6Lgqe+2TDeCAflPAYigyOyMLMpKnzBtq3T6UuH3cp5nrp0cRoVwNtqb6u8D3G+YBX/qM5rnWe8+V5eSSSbckmjo/A1K9RaVFGd22Ku3zPcBvOqdHq31aq4ssVK06Ka6tepqp0wNZuTtNu7jaez9soYRWw+FvSpOp7TG6u2rWAIahYG9O5Kmw1XP5TqarCOj+jKHR1QI+jWx2iGLsB7Ng9L8ruWI0jfv25a/dbk4nG1Kpqabv2tLSNTE1VsQp/2vdGnRQk+4Be97WAuAtkZqfZuhWkgapSSk6l6mlbSamPy1kNySdGy+9bYUgCsrdk7VWooi2p0rsVKi4DqxF1pOTZmdTtsLjUpV0r1AOzNPQYdlWeqFR6jn3irqDdiwHuim1yQCxvrgUgNBzS7XDU0cB2a7NUqaRCKWGj+Mov7h9wC5JB2sr0CUJr0lBRQUo0SqEU3Ok7NTQtfD9/aL75FtZGsLxvSARhWcntCuiMO2tVp2AVXP/ARrFMgMdp7mJDMQAUNTRX2O4uqIFqNUX3b+5bRqXuO0H4Y0rAH8h6HVfoqvi3RsKz4ZaZsye8UXudg2rTdrDSV91yRZROpPVTEYqouKqu1OkLAECxdQNVNFFgKdtVgLW3a59e6Owy0lCU1CINiqAB8wNV/p3QoOgugaOFTQooq3N2IG0n19Mp1AsOmQfPL9oWjEaoAJZluwAJJAAFySbAAbSSdgnyDrv15fFs2FwbFaOypWGo1M1TJN+0+W1vwqda+lcO+MYYW1lGjUZdSNUublbaj3XI2nnKVQ22zl9E4BaajZynSLD0VnHfreDaoT3njF9od/GQMM+YlkiRViufRle0HPnKDDdwP7SavQMKt8Sc+cWcRvhNbI8IBO48AJABqnMxZY740k5c4BPlCElm38oLVGz5xrefKKJ3yhbVXz5wGd8zxMPS3jlAL7+QhAdq+Z5y4Vxn9JUD04TeecHs98zDGDLmZPbB325ylbEG8wlG+YxilyHEwxixkOJkWtYNu/6zPj8OtWm9Jtjgi9th2q3yIB+UD2sZfX9pXtSn/JhXh+geq2IxVdqCLYobVXP5aesjXmTY2A2+WufQ+lOonRmFw6PialRArXZwTp1tmknZgH3dn5QNEd+u87HVHrBSw5K1BanUIJcayrAWBbVrW1vKdzrZ1Up4xO1pMBV0T2VZbNo313TuB1czYg65252447kfL+sPTdj7NWpLSoDRahhqVzoWLaFeqyle1v3pt/lI18t6bn3KnZVqyaIpUlDWU7ToH3fe0bf+HuNuwEaMPpTA4nCE4YD3/4nbEaKqf9w0Gb+Dtu73XcF1aScBXWtV7KnTLVXRu0xNIEFT+qslM2VVtqZvdLDwknSrKV9FKqGurjEtokBQCqn8tCqaI/M+dOmSosNWrQjWpuxZGZMTig3uLY1Ctv4nYuwArvc37I3C9wJuBWAfSRqOEre/TL1WqMOyUUrWZsNUNzh1B1sDYtq/lIin7QNDBlTXN1xDKhp1avx0ULWCEWDAaDG12ABNgxY/HinUDqL4vSLOysWp06pNtKkuu9bYCblVP5e7R9f1I/08LkYnGqTf3lpNrLE69Krf8AvzOoew6o9RQmhiMWqPiQoGlrJGoAFyT776j7xF9dr2E9b2BG3bnn6ylgzU6AAAsNWoAbAMgIwJHhIWjKEBYdfFrTRnqsFRAWZ2NgoHeTMfTvS9HCUjWrNZRsH6mPhUd5+nfPjPT/AFkxHSbBX/Dw6m601P5jfUznaxA/wJnditvW/rfU6RY0KGlTwgNidj1rd7ZLkvHIIwHRyUwPd+kLBYZEAA/tNWkN/D9py3a6ZggPhHKWCMhKLDPkZYcZiZaEpyX1whG/cOcVpDxCED8Q4yKK7buUW193L94ZG/n9oBXfz+0Abn1eAVMtl38/tAZd/P7QBdREkDf8ow+frhFs28cYQJ+fCJY7jz/eG9D4vr+8WcOPEOP3lQp3+E8DANQ+HlGtRHi+sX2Iz+soWax8PKSWcOMxxMkI6ukcxxldoc45UGUjMuUoUKpzjO33mUlVfDD7dfDIqu1PiPOEtY5mV2y+GTtR4fpAf2xtt5zq9XestXCNYe/RP5qROwna1M9x3bDOKKy5fSNSonhHOWwlfVMVg8J0nhzYh0YWNtTKRrAYbQQftPknXLqfXwhYh+zwy6NQ1V1uXUj36mjol30iNHRAVb69DWT1uiekHoVO0oEK3eNei4yYf3n0noXpuhjkNNgA9vfpNtyJXxLv4zpnVc+uY+JYKnWx9RfYGNJ10TUSyozPsGJquoC1Q2u4tcXNlIJY/YeqfU+hhBphE7ZgNNlFlvtPZqSdBSbnRGrXOx0L0Bh8KpShTVATc2GsnefIAW7gANk6OjNMgtIyAw7SSjI9G3lOZ1g6aoYKia+IfRUalA/M7dyIO8/STrh1qodH0e0rG7G4p0x+eo2QyGZ7p8M6RxWI6Rr+0Yk/+nTF9Gml9ij6naZndiwHSnSNfpGv21YkJ+in3Kt9Qt6vOjSw2iLD6CXQwoUaoZUict1vMimHlwlFVy+sK5glhI0qwz5yf9jxkZRugHyEArDxHjL1eL6RfykgMsPEJCo8QiTFtaQPKjxLzi2XesSbRbVBBTWvmIB8xFM4yizU3QOgFuo97gBA7NczyisM+ojZY3z2/PdDa2Y4D+5gUUTfxgMi+jJqz/8ArKZlz5j9pULIX1aSCWX0ftJCOwuIG8Q+2Tv+kSFHoQ1oLKZVFkzlBk3Q2pLANFfV5FHdd3H7QkVd3H7RK0R6MLslgO0R6Jlikv8AgmJFBd/GQ0Rv4wrSKa9zH5zTQUgq6voupurrqYHz/tOeKI38o1KK5mB9Q6sdcBU0aOJKrV2K41JU/wDy26eutPhaUKZFjcjznrurfXBqFqWIJelsWptdB3B/EN+2dOe/WN58fRrTyvXvrtR6Op67VK7D8OkDrPxP4U+vdOX1w/1Mo0KejhPx67al1HQS/wCpz32yG2fJ8PgKtaq1fEOalVzdmbX8hl/aa3rGYW1Sti65xWKYvUbZf8qjuVV2KBl/edqidEah64R1LCWH2jOz9WnLddMyEtU3QGc5TSV3coBonfIrKWMXYzYaJygGkd8EZxKLR4pSjQ3GBnYwSchrmnsfV4s0vV5ArQMoqd0Y1OLKGAFjkIh/5Y5kO6JdWy5iAtlOUoruhGk27jBNJt3EwhZFtgt6vEs5mg0TunOZpU1oNU5xZqnOKD74LNvEpTO1OfOXM5YyREr3Wjv+kYo1ThLjHzPGNXGvm3GIudO0FPoQWpn0JyxjW8Tf1SjjXzb+oyRf6x0uyPoSgm7lOX7W+bcZZxr5tx+0QuOqtP4RwhaHwjhOWMc+Z5QhjmzPARFuOnojIQgnqwnNGObM8BCGOffEK66apoRzb/H7TjU69Rs4/wDEt35a4WtbYNb3C2MJaNpiBqQHd/QMFdQDfKdTOUKz+ry+3fLmYK6GuTX6vOaazb+MA1n38YK6TX3c4s3zHGc9sQ2+KfFN6MRK6DneOMAuMxxnMau2+Ua24+vnEK6LVBnALjxTmmvuMD2jceUQrpMwzimcZzC2I9WEWcVJCugagzi2cZic5sUc/rBOI9a4iV0GYZiLNt057VxnzMBsQMzxiFdEgbpzMVS94/aUa2/nLZ798qM5pn1aUVjTAYbzwlQq26XJonPkZcD0mg2f0lhW9WlyQsFZ8/pCAfMcJUkiwQD7uEo1G3SpIFabbuEG7buAlyQDR33cBGq9TdylyQYatSoO/wCktHqZ/SSSRTRVfP6SGpUz+kkkoB6r5nlA7dvEZJIQBqt4oJqtnJJKgDXbPlBauchKkkANX+ERfbjwiSSABrjwiAMQPCJJIKFsQPDFNWXL6ySQALLl9YPu5SSQKBTfL0UzMqSALUlz5RbYcZySQFNRi9m31zkklRemPV5JJIH/2Q=='
    return (
        <div className="product-card-container">
            {[0, 0, 0, 0].map(item => {
                return (
                    <div className="card-product">
                        <img src={imageUrl} alt="Laptop" className="card-image" />
                        <h3 className="card-title">Laptop</h3>
                        <p className="card-price">$599.99</p>
                        <p className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <button className="card-action-button">View Details</button>
                    </div>)
            })}
        </div>

    )
}

export default Card1